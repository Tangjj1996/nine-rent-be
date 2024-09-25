import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { HouseInfo } from './HouseInfo';

@Entity('house')
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column({
    comment: '发布者id',
  })
  author_id: number;

  @Column({ comment: '图片地址', type: 'simple-array' })
  covers: string[];

  @Column({ comment: '标题' })
  title: string;

  @Column({ comment: '内容', type: 'text' })
  content: string;

  @Column({ comment: '标签', type: 'simple-array' })
  tags: string[];

  @Column()
  like_count: number;

  @Column()
  collection_count: number;

  @ManyToOne(() => HouseInfo, (houseInfo) => houseInfo.house)
  @JoinColumn()
  house_info: HouseInfo;
}
