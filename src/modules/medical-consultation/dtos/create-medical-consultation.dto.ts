import { ApiProperty } from '@nestjs/swagger';
import { IsObject, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { MConsultationMessagesEnum } from '../enums/m_consultation.enum';
import { VitalSignsDto } from './vital-signs.dto';
import { PlyometricMeasurementsDto } from './plyometric-measurements.dto';
import { BodyMeasurementsDto } from './body-measurements.dto';
import { BasicMeasurementsDto } from './basic-measurements.dto';
import { CircumferencesDto } from './circumferences.dto';

export class RegisterMedicalConsultationDto {
  account_uuid: string;

  @ApiProperty()
  user_uuid: string;

  @ApiProperty()
  patient_uuid: string;

  @ApiProperty({ required: false })
  @IsObject({ message: MConsultationMessagesEnum.ACTION_INVALID })
  @Type(() => BasicMeasurementsDto)
  @ValidateNested()
  basic_measurements: BasicMeasurementsDto;

  @ApiProperty({ required: false })
  @IsObject({ message: MConsultationMessagesEnum.ACTION_INVALID })
  @Type(() => BodyMeasurementsDto)
  @ValidateNested()
  body_measurements: BodyMeasurementsDto;

  @ApiProperty({ required: false })
  @IsObject({ message: MConsultationMessagesEnum.ACTION_INVALID })
  @Type(() => VitalSignsDto)
  @ValidateNested()
  vital_signs: VitalSignsDto;

  @ApiProperty({ required: false })
  @IsObject({ message: MConsultationMessagesEnum.ACTION_INVALID })
  @Type(() => PlyometricMeasurementsDto)
  @ValidateNested()
  plyometric_measurements: PlyometricMeasurementsDto;

  @ApiProperty({ required: false })
  @IsObject({ message: MConsultationMessagesEnum.ACTION_INVALID })
  @Type(() => CircumferencesDto)
  @ValidateNested()
  circumferences: CircumferencesDto;

  @ApiProperty({ required: false })
  @IsOptional()
  somatocarta: number;

  @ApiProperty({ required: false })
  @IsOptional()
  somatotype: number;

  fao_who_onu: number;

  harris_benedict: number;

  valencia: number;

  mifflin_st: number;
}
