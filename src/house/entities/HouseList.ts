import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { HouseDetail } from './HouseDetail';
import { HouseInfo } from './HouseInfo';

@Entity('house_list')
export class HouseList {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  @Column({
    type: 'char',
    length: 36,
  })
  key: string;

  @Column()
  text: string;

  @Column()
  cover: string;

  @Column()
  avatar: string;

  @Column()
  like_count: number;

  @Column()
  author: string;

  @OneToOne(() => HouseDetail, (hourseDetail) => hourseDetail.house_list)
  house_detail: HouseDetail;

  @ManyToOne(() => HouseInfo, (houseInfo) => houseInfo.house_list)
  @JoinColumn()
  house_info: HouseInfo;
}
