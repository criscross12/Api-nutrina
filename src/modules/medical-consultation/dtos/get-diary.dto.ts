import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class GetDiaryDto {
  @Exclude()
  _id: string;

  @Exclude()
  __v: number;

  @ApiProperty()
  user_uuid: string;

  @ApiProperty()
  patient_uuid: string;

  @ApiProperty()
  dayOfDate: Date;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  description: string;

  @ApiProperty()
  created_at: string;
  @Exclude()
  updated_at: string;
  @Exclude()
  deleted_at: string;
}
