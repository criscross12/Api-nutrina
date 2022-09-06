import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  second_name: string;

  @ApiProperty()
  date_of_birth: Date;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  ocupation: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  sex: string;

  created_at: number;
}
