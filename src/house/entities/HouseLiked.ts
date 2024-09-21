import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity('house_liked')
export class HouseLiked {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column()
  openid: string;

  @Column()
  house_list_id: string;

  @Column()
  house_detail_id: string;
}
