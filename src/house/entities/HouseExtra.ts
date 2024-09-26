import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';

@Entity('house_extra')
export class HouseExtra {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column({
    comment: '用户id',
  })
  openid: string;

  @Column({
    comment: '点赞的房子',
    nullable: true,
  })
  like_house_id: number | null;

  @Column({
    comment: '收藏的房子',
    nullable: true,
  })
  collection_house_id: number | null;
}
