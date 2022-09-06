import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'plyometric_measurements' })
export class PlyometricMeasurementsDocument extends Document {
  @Prop()
  pl_triceps: number;

  @Prop()
  pl_subscapular: number;

  @Prop()
  pl_biceps: number;

  @Prop()
  pl_iliac_crest: number;

  @Prop()
  pl_supraspinal: number;

  @Prop()
  pl_abdominal: number;

  @Prop()
  pl_thigh: number;

  @Prop()
  pl_leg: number;

  @Prop()
  pr_relaxed_arm: number;

  @Prop()
  pr_flexed_arm: number;

  @Prop()
  pr_mid_thigh: number;

  @Prop()
  pr_leg: number;

  @Prop()
  d_humerus: number;

  @Prop()
  d_biestyloid: number;

  @Prop()
  d_femur: number;

  @Prop()
  three_pl: number;

  @Prop()
  five_pl: number;
}

export const PlyometricMeasurementsSchema = SchemaFactory.createForClass(
  PlyometricMeasurementsDocument,
);
