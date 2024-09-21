import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('login')
  async login(@Req() request: Request) {
    const { code } = request.query;

    return await this.userService.wxLogin(code as string);
  }

  @Get('getProfile')
  async getProfile(@Req() request: Request) {
    const openid = request.header('openid');

    return await this.userService.getProfile(openid);
  }
}
