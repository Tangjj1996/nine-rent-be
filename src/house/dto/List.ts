import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class ListDTO {
  @IsNumber()
  @Transform(({ value }) => Number(value) || undefined)
  current: number;

  @IsNumber()
  @Transform(({ value }) => Number(value) || undefined)
  page_size: number;
}
