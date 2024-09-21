import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { HourseList } from './entities/HourseList';
import { HourseInfo } from './entities/HourseInfo';
import { HourseCollection } from './entities/HourseCollection';
import { HourseLiked } from './entities/HourseLiked';
import { HourseDetail } from './entities/HouseDetail';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      HourseList,
      HourseDetail,
      HourseInfo,
      HourseCollection,
      HourseLiked,
    ]),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
