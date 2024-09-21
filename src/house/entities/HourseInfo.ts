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

  @OneToMany(() => HourseList, (hourseList) => hourseList.hourse_info)
  hourse_list: HourseList[];
}
