import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { HourseDetail } from './HouseDetail';
import { HourseInfo } from './HourseInfo';

@Entity('hourse_list')
export class HourseList {
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

  @Column()
  isLiked: boolean;

  @OneToOne(() => HourseDetail, (hourseDetail) => hourseDetail.hourse_list)
  hourse_detail: HourseDetail;

  @ManyToOne(() => HourseInfo, (hourseInfo) => hourseInfo.hourse_list)
  hourse_info: HourseInfo;
}
