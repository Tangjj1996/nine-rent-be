import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { HourseDetail } from './HouseDetail';
import { HourseInfo } from './HourseInfo';

@Entity('hourse_list')
export class HourseList {
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

  @OneToOne(() => HourseDetail, (hourseDetail) => hourseDetail.hourse_list)
  hourse_detail: HourseDetail;

  @ManyToOne(() => HourseInfo, (hourseInfo) => hourseInfo.hourse_list)
  @JoinColumn()
  hourse_info: HourseInfo;
}
