import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/Profile';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async wxLogin(code: string) {
    const response = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session`,
      {
        params: {
          appid: this.configService.get<string>('WECHAT_APPID'),
          secret: this.configService.get<string>('WECHAT_SECRET'),
          js_code: code,
          grant_type: 'authorization_code',
        },
      },
    );
    const { openid } = response.data;

    const result = await this.profileRepository.find({ where: { openid } });
    if (!result.length) {
      const profile = new Profile();
      profile.openid = openid;
      profile.house_info_id = 1;
      profile.nick_name = 'mono';
      profile.house_info_address = '上海市杨浦区';
      profile.avatar =
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo310h0v19f6k505nj20u2g91rsgq91350?imageView2/2/w/120/format/jpg|imageMogr2/strip';
      await this.profileRepository.save(profile);
    }

    return { openid };
  }

  async getProfile(openid: string) {
    return await this.profileRepository.findOne({ where: { openid } });
  }
}
