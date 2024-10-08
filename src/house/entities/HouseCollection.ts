import { Entity, Generated, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('house_collection')
export class HouseCollection {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  key: string;

  @Column()
  openid: string;

  @Column()
  house_id: number;
}
