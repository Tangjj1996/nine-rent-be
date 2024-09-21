import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity('hourse_liked')
export class HourseLiked {
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
