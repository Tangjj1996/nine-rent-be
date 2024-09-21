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

  async getList({ openid }: { openid: string }) {
    this.hourseListService.find({});
  }
}
