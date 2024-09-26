import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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

    const result = await this.userRepository.find({ where: { openid } });
    if (!result.length) {
      const user = new User();
      user.openid = openid;
      user.house_info_id = 1;
      user.nick_name = 'mono';
      user.house_info_address = '上海市杨浦区';
      user.avatar =
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo310h0v19f6k505nj20u2g91rsgq91350?imageView2/2/w/120/format/jpg|imageMogr2/strip';
      await this.userRepository.save(user);
    }

    return { openid };
  }

  async getuser(openid: string) {
    return await this.userRepository.findOne({ where: { openid } });
  }
}
