import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get('getList')
  async getList(@Req() req: Request) {
    const openid = req.header('openid') as string;
    this.houseService.getList({ openid });
  }

  @Get('getDetail')
  async getDetail() {}
}
