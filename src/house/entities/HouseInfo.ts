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
    comment: '行政区划代码',
  })
  code: string;

  @Column({
    comment: '行政区划的名称',
  })
  name: string;

  @Column({
    comment: '上级行政区划的代码',
  })
  parent_code: string;

  @Column({
    comment: '行政区划的层级',
  })
  level: string;

  @OneToMany(() => HouseList, (houseList) => houseList.house_info)
  house_list: HouseList[];
}
