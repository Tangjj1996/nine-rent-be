import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity('house_liked')
export class HouseLiked {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column({
    comment: '用户身份',
  })
  openid: string;

  @Column({
    comment: '点赞的房子',
    nullable: true,
  })
  house_list_id: number | null;
}
