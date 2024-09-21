import {
  Entity,
  Column,
  Generated,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { HourseList } from './HourseList';

@Entity('hourse_detail')
export class HourseDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @OneToOne(() => HourseList, (hourseList) => hourseList.hourse_detail)
  hourse_list: HourseList;
}
