import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HourseList } from './entities/HourseList';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(HourseList)
    private readonly hourseListService: Repository<HourseList>,
  ) {}

  /**
   * 获取列表
   * @param param0
   */
  async getList({ openid }: { openid: string }) {
    console.log(openid);
    // this.hourseListService.find({});
  }

  /**
   * 根据地理位置选择最接近的小区
   */
  async getHouseInfo() {}
}
