import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HouseList } from './entities/HouseList';
import { HouseLiked } from './entities/HouseLiked';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(HouseList)
    private readonly houseListRepository: Repository<HouseList>,

    @InjectRepository(HouseLiked)
    private readonly houseLikedRepository: Repository<HouseLiked>,
  ) {}

  /**
   * 获取列表
   * @param param0
   */
  async getList({ openid }: { openid: string }) {
    const houseList = await this.houseListRepository.find();
    const houseLiked = (
      await this.houseLikedRepository.find({
        where: {
          openid,
        },
      })
    ).map(({ house_list_id }) => house_list_id);

    return houseList.map((item) => {
      if (houseLiked.includes(item.id)) {
        return { ...item, is_liked: true };
      }
      return { ...item, is_liked: false };
    });
  }

  /**
   * 根据地理位置选择最接近的小区
   */
  async getHouseInfo() {}
}
