import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Profile } from './entities/Profile';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
