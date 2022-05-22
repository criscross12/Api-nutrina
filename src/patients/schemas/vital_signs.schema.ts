import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'vital_signs' })
export class VitalSignsDocument extends Document {
  @Prop()
  capillary_glucose: number;

  @Prop()
  heart_rate: number;

  @Prop()
  blood_pressure: number;
}

export const VitalSignsSchema = SchemaFactory.createForClass(VitalSignsDocument);
