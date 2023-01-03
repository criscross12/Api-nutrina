import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDiaryDto {
  @IsString()
  user_uuid: string;

  @ApiProperty()
  patient_uuid: string;

  @ApiProperty()
  dayOfDate: Date;

  status: boolean;

  @ApiProperty()
  description: string;

  created_at: number;
}
