import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'basic_measurements' })
export class BasicMeasurementsDocument extends Document {
  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop()
  imc: number;

  @Prop()
  waist: number;

  @Prop()
  hip: number;

  @Prop()
  icc: number;
}

export const BasicMeasurementsSchema = SchemaFactory.createForClass(
  BasicMeasurementsDocument,
);
