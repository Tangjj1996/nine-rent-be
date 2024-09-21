import { IsNumber } from 'class-validator';

export class CollectionDTO {
  @IsNumber()
  id: number;
}
