import {
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { HouseList } from './HouseList';

@Entity('house_detail')
export class HouseDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
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

  @OneToOne(() => HouseList, (houseList) => houseList.house_detail)
  @JoinColumn()
  house_list: HouseList;
}
