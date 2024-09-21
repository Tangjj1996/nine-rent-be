import {
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { HourseList } from './HourseList';

@Entity('hourse_detail')
export class HourseDetail {
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

  @OneToOne(() => HourseList, (hourseList) => hourseList.hourse_detail)
  @JoinColumn()
  hourse_list: HourseList;
}
