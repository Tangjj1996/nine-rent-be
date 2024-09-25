import {
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { House } from './House';

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

  @OneToMany(() => House, (house) => house.house_info)
  house: House[];
}
