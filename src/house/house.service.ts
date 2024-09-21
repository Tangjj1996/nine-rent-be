import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HouseList } from './entities/HouseList';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(HouseList)
    private readonly hourseListRepository: Repository<HouseList>,
  ) {}

  /**
   * 获取列表
   * @param param0
   */
  async getList({}: { openid: string }) {
    const result = await this.hourseListRepository.find({});
    return result;
  }

  /**
   * 根据地理位置选择最接近的小区
   */
  async getHouseInfo() {}
}
