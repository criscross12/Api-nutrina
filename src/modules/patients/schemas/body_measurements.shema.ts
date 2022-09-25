import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'body_measurements' })
export class BodyMeasurementsDocument extends Document {
  @Prop()
  fat_percentage: number;

  @Prop()
  grasa_kg: number;

  @Prop()
  muscle_mass_percentage: number;

  @Prop()
  muscle_mass_kg: number;

  @Prop()
  visceral_fat_percentage: number;

  @Prop()
  body_age: number;
}

export const BodyMeasurementsSchema = SchemaFactory.createForClass(
    BodyMeasurementsDocument,
);
