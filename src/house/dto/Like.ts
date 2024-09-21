import { IsNumber } from 'class-validator';

export class LikeDTO {
  @IsNumber()
  id: number;
}
