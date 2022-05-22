import { IsIn, IsNumber, IsOptional, IsObject, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformToNumber } from 'src/shared/transforms/transformToNumber';
import { ApiProperty } from '@nestjs/swagger';

export class PaginateDto {
  @IsNumber({ maxDecimalPlaces: 0, allowNaN: false })
  @TransformToNumber()
  @IsIn([1, -1])
  @IsOptional()
  sort?: number;

  @IsOptional()
  @Transform((value) =>
    Array.isArray(value.value) ? value.value : value.value.split(','),
  )
  @IsArray()
  sortFields?: string[];

  @IsOptional()
  @IsObject()
  sortFieldsObj?: object;

  @IsOptional()
  @TransformToNumber()
  @IsNumber()
  @ApiProperty()
  perPage?: number;

  @Transform((value) =>
    Number.parseInt(String(value.value)) >= 1
      ? Number.parseInt(String(value.value))
      : 1,
  )
  @IsOptional()
  @TransformToNumber()
  @IsNumber()
  @ApiProperty()
  page?: number;

  @Transform((value) =>
    Number.parseInt(String(value.value)) >= 1
      ? Number.parseInt(String(value.value))
      : 1,
  )
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  count?: number;

  @Transform((value) =>
    Number.parseInt(String(value.value)) >= 1
      ? Number.parseInt(String(value.value))
      : 1,
  )
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  pages?: number;
}
