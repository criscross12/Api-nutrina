import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class GetMedialConsultationDto {
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
}
