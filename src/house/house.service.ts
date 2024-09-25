import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { House } from './entities/House';
import { HouseLiked } from './entities/HouseLiked';
import { ListDTO, DetailDTO } from './dto/List';
import { LikeDTO } from './dto/Like';
import { User } from '../user/entities/User';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House)
    private readonly houseListRepository: Repository<House>,

    @InjectRepository(HouseLiked)
    private readonly houseLikedRepository: Repository<HouseLiked>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * 获取列表
   * @param param0
   */
  async getList({ openid, query }: { openid: string; query: ListDTO }) {
    const { current, page_size } = query;
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

    const result = { total, current, page_size, list: [] };

    for (const item of houseList) {
      const { avatar, nick_name } =
        (await this.userRepository.findOne({
          where: { id: item.author_id },
        })) || {};

      const { id, key, cover, title, like_count } = item;

      result.list.push({
        id,
        key,
        cover,
        title,
        like_count,
        avatar,
        nick_name,
        is_liked: houseLiked.includes(item.id),
      });
    }

    return result;
  }

  async getDetail({ openid, id }: { openid: string } & DetailDTO) {
    const data = await this.houseListRepository.findOne({ where: { id } });
    const houseLiked = (
      await this.houseLikedRepository.find({
        where: {
          openid,
        },
      })
    ).map(({ house_list_id }) => house_list_id);

    return Object.assign(data, {
      is_liked: houseLiked.includes(data.id),
    });
  }

  /**
   * 点赞
   * @param param0
   * @returns
   */
  async like({ openid, like }: { openid: string; like: LikeDTO }) {
    const { id } = like;
    const user = this.houseLikedRepository.create({
      openid,
      house_list_id: id,
    });
    await this.houseLikedRepository.save(user);
    const house = await this.houseListRepository.findOne({ where: { id } });
    house.like_count++;
    await this.houseListRepository.save(house);

    return { id };
  }

  /**
   * 取消点赞
   * @param param0
   * @returns
   */
  async cancelLike({ openid, like }: { openid: string; like: LikeDTO }) {
    const { id } = like;
    const user = this.houseLikedRepository.create({
      openid,
      house_list_id: id,
    });
    await this.houseLikedRepository.save(user);
    const house = await this.houseListRepository.findOne({ where: { id } });
    if (house.like_count) {
      house.like_count--;
    }
    await this.houseListRepository.save(house);

    return {
      id,
    };
  }

  /**
   * 根据地理位置选择最接近的小区
   */
  async getHouseInfo() {}
}
