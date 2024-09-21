import {
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { HourseList } from './HourseList';

@Entity('hourse_info')
export class HourseInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column()
  address: string;

  @OneToMany(() => HourseList, (hourseList) => hourseList.hourse_info)
  hourse_list: HourseList[];
}
