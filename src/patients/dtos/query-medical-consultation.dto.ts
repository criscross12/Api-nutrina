import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { PaginateDto } from 'src/shared/dtos/paginate.dto';

export class QueryMedialConsultationDto extends PaginateDto {
  @Exclude()
  _id: string;

  @Exclude()
  __v: number;

  @ApiProperty()
  user_uuid: string;

  @ApiProperty()
  patient_uuid: string;

  @ApiProperty()
  basic_measurements: Array<string>;

  @ApiProperty()
  body_measurements: Array<string>;

  @ApiProperty()
  vital_signs: Array<string>;

  @ApiProperty()
  plyometric_measurements: Array<string>;

  @ApiProperty()
  somatocarta: number;

  @ApiProperty()
  somatotype: number;

  @ApiProperty()
  readonly created_at: string;
  @Exclude()
  readonly updated_at: string;
  @Exclude()
  readonly deleted_at: string;

  @ApiProperty()
  search: string;
}
