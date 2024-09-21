import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

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
    console.log(openid, '++++', code, response);
    return { openid };
  }
}
