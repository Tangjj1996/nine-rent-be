import { Entity, Generated, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hourse_collection')
export class HourseCollection {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column()
  openid: string;

  @Column()
  hourse_list_id: string;

  @Column()
  hourse_detail_id: string;
}
