import { ApiProperty } from '@nestjs/swagger';
//TODO crear mensajes de validaciones
import { PostMessagesEnum } from '../enums/post.enum';

export class PlyometricMeasurementsDto {
    @ApiProperty()
    pl_triceps: number;

    @ApiProperty()
    pl_subscapular: number;

    @ApiProperty()
    pl_biceps: number;

    @ApiProperty()
    pl_iliac_crest: number;

    @ApiProperty()
    pl_supraspinal: number;

    @ApiProperty()
    pl_abdominal: number;

    @ApiProperty()
    pl_thigh: number;

    @ApiProperty()
    pl_leg: number;

    @ApiProperty()
    pr_relaxed_arm: number;

    @ApiProperty()
    pr_flexed_arm: number;

    @ApiProperty()
    pr_mid_thigh: number;

    @ApiProperty()
    pr_leg: number;

    @ApiProperty()
    d_humerus: number;

    @ApiProperty()
    d_biestyloid: number;

    @ApiProperty()
    d_femur: number;
}