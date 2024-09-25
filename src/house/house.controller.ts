import { Controller, Get, Post, Query, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { HouseService } from './house.service';
import { ListDTO, DetailDTO } from './dto/List';
import { LikeDTO } from './dto/Like';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get('getList')
  async getList(@Req() req: Request, @Query() query: ListDTO) {
    const openid = req.header('openid') as string;

    return await this.houseService.getList({ openid, query });
  }

  @Get('getDetail')
  async getDetail(@Req() req: Request, @Query() query: DetailDTO) {
    const openid = req.header('openid') as string;
    const { id } = query;

    return await this.houseService.getDetail({ openid, id });
  }

  @Post('like')
  async like(@Req() req: Request, @Body() like: LikeDTO) {
    const openid = req.header('openid') as string;

    return await this.houseService.like({ openid, like });
  }

  @Post('cancelLike')
  async cancelLike(@Req() req: Request, @Body() like: LikeDTO) {
    const openid = req.header('openid') as string;

    return await this.houseService.cancelLike({ openid, like });
  }

  @Post('collection')
  async collection() {}

  @Post('cancelCollection')
  async cancelCollection() {}
}
