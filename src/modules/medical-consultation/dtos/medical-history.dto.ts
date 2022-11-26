import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class MedicalHistoryDto {
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

  password: string;

  @ApiProperty()
  ocupation: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  sex: string;

  roles: Array<string>;

  created_at: number;
}
