import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { House } from './entities/House';
import { HouseInfo } from './entities/HouseInfo';
import { HouseCollection } from './entities/HouseCollection';
import { HouseExtra } from './entities/HouseExtra';
import { User } from '../user/entities/User';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      House,
      HouseInfo,
      HouseCollection,
      HouseExtra,
      User,
    ]),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
