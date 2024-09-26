import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export enum HouseType {
  like = 1,
  collection = 2,
}

export class ListDTO {
  @IsNumber()
  @Transform(({ value }) => Number(value) || undefined)
  current: number;

  @IsNumber()
  @Transform(({ value }) => Number(value) || undefined)
  page_size: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value) || undefined)
  type?: HouseType;
}

export class DetailDTO {
  @IsNumber()
  @Transform(({ value }) => Number(value) || undefined)
  id: number;
}
