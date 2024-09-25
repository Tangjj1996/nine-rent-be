import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openid: string;

  @Column({
    comment: '对应小区的id',
  })
  house_info_id: number;

  @Column({
    comment: '对应小区的地址',
  })
  house_info_address: string;

  @Column({
    comment: '名字',
  })
  nick_name: string;

  @Column({
    comment: '头像',
  })
  avatar: string;
}
