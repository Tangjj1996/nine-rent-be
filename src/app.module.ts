import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [UserModule, HouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
