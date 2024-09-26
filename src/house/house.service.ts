import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { House } from './entities/House';
import { HouseExtra } from './entities/HouseExtra';
import { ListDTO, DetailDTO } from './dto/List';
import { LikeDTO } from './dto/Like';
import { User } from '../user/entities/User';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House)
    private readonly houseRepository: Repository<House>,

    @InjectRepository(HouseExtra)
    private readonly houseExtraRepository: Repository<HouseExtra>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * 获取列表
   * @param param0
   */
  async getList({ openid, query }: { openid: string; query: ListDTO }) {
    const { current, page_size } = query;
    const [houseList, total] = await this.houseRepository.findAndCount({
      skip: (current - 1) * page_size,
      take: page_size,
    });
    const houseLiked = (
      await this.houseExtraRepository.find({
        where: {
          openid,
        },
      })
    ).map(({ like_house_id }) => like_house_id);

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
    const data = await this.houseRepository.findOne({ where: { id } });
    const houseLiked = (
      await this.houseExtraRepository.find({
        where: {
          openid,
        },
      })
    ).map(({ like_house_id }) => like_house_id);

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
    const user = this.houseExtraRepository.create({
      openid,
      like_house_id: id,
    });
    await this.houseExtraRepository.save(user);
    const house = await this.houseRepository.findOne({ where: { id } });
    house.like_count++;
    await this.houseRepository.save(house);

    return { id };
  }

  /**
   * 取消点赞
   * @param param0
   * @returns
   */
  async cancelLike({ openid, like }: { openid: string; like: LikeDTO }) {
    const { id } = like;
    await this.houseExtraRepository.delete({
      openid,
      like_house_id: id,
    });
    const house = await this.houseRepository.findOne({ where: { id } });
    if (house.like_count) {
      house.like_count--;
    }
    await this.houseRepository.save(house);

    return {
      id,
    };
  }

  /**
   * 收藏
   * @param param0
   * @returns
   */
  async collection({
    openid,
    collection,
  }: {
    openid: string;
    collection: LikeDTO;
  }) {
    const { id } = collection;
    const user = this.houseExtraRepository.create({
      openid,
      collection_house_id: id,
    });
    await this.houseExtraRepository.save(user);
    const house = await this.houseRepository.findOne({ where: { id } });
    house.collection_count++;
    await this.houseRepository.save(house);

    return { id };
  }

  /**
   * 取消点赞
   * @param param0
   * @returns
   */
  async cancelCollection({ openid, like }: { openid: string; like: LikeDTO }) {
    const { id } = like;
    await this.houseExtraRepository.delete({
      openid,
      collection_house_id: id,
    });
    const house = await this.houseRepository.findOne({ where: { id } });
    if (house.collection_count) {
      house.collection_count--;
    }
    await this.houseRepository.save(house);

    return {
      id,
    };
  }

  /**
   * 根据地理位置选择最接近的小区
   */
  async getHouseInfo() {}
}
