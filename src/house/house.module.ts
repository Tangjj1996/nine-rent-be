import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { HouseList } from './entities/HouseList';
import { HouseInfo } from './entities/HouseInfo';
import { HouseCollection } from './entities/HouseCollection';
import { HouseLiked } from './entities/HouseLiked';
import { HouseDetail } from './entities/HouseDetail';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      HouseList,
      HouseDetail,
      HouseInfo,
      HouseCollection,
      HouseLiked,
    ]),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
