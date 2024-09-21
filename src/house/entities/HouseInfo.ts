import {
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { HouseList } from './HouseList';

@Entity('house_info')
export class HouseInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column({
    comment: '小区编码',
  })
  code: string;

  @Column({
    comment: '小区地址',
  })
  address: string;

  @OneToMany(() => HouseList, (houseList) => houseList.house_info)
  house_list: HouseList[];
}
