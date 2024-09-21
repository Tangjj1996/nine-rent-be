import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { HouseService } from './house.service';
import { ListDTO } from './dto/List';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get('getList')
  async getList(@Req() req: Request, @Query() query: ListDTO) {
    const openid = req.header('openid') as string;

    return await this.houseService.getList({ openid, query });
  }

  @Get('getDetail')
  async getDetail() {}

  @Post('like')
  async like() {}

  @Post('cancelLike')
  async cancelLike() {}

  @Post('collection')
  async collection() {}

  @Post('cancelCollection')
  async cancelCollection() {}
}
