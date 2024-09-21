import { Controller, Get } from '@nestjs/common';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get('getList')
  async getList() {}

  @Get('getDetail')
  async getDetail() {}
}
