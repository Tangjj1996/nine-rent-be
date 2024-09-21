import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HouseList } from './entities/HouseList';
import { HouseLiked } from './entities/HouseLiked';
import { ListDTO } from './dto/List';

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
  async getList({ openid, query }: { openid: string; query: ListDTO }) {
    const { current, page_size } = query;
    console.log(typeof current);
    const [houseList, total] = await this.houseListRepository.findAndCount({
      skip: (current - 1) * page_size,
      take: page_size,
    });
    const houseLiked = (
      await this.houseLikedRepository.find({
        where: {
          openid,
        },
      })
    ).map(({ house_list_id }) => house_list_id);

    return {
      list: houseList.map((item) => {
        if (houseLiked.includes(item.id)) {
          return { ...item, is_liked: true };
        }
        return { ...item, is_liked: false };
      }),
      total,
    };
  }

  /**
   * 根据地理位置选择最接近的小区
   */
  async getHouseInfo() {}
}
