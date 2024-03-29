import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { PaginateDto } from 'src/shared/dtos/paginate.dto';

export class QueryPatientDto extends PaginateDto {
  @Exclude()
  _id: string;

  @Exclude()
  __v: number;

  @ApiProperty()
  readonly uuid: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  second_name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  date_of_birth: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  ocupation: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  readonly created_at: string;
  @Exclude()
  readonly updated_at: string;
  @Exclude()
  readonly deleted_at: string;

  @ApiProperty()
  search: string;
}
