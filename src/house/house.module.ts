import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { HourseList } from './entities/HourseList';

@Module({
  imports: [TypeOrmModule.forFeature([HourseList])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
