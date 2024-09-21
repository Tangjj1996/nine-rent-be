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
  })
  house_list_id: number;

  @Column({
    comment: '点赞的房子详情',
  })
  house_detail_id: number;
}
