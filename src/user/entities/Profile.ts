import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openid: string;

  @Column({
    comment: '对应小区的id',
  })
  house_info_id: number;
}
