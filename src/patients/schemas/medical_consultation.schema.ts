import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { VitalSignsDocument } from './vital_signs.schema';
import { BasicMeasurementsDocument } from './basic_measurements.schema';
import { BodyMeasurementsDocument } from './body_measurements.shema';
import { PlyometricMeasurementsDocument } from './plyometric_measurements.schema';

@Schema({ collection: 'medical_consultation' })
export class MedicalConsultationDocument extends Document {
  @Prop()
  account_uuid: string;

  @Prop()
  user_uuid: string;

  @Prop()
  patient_uuid: string;

  @Prop({ type: Object, default: [] })
  basic_measurements: BasicMeasurementsDocument;

  @Prop({ type: Object, default: [] })
  body_measurements: BodyMeasurementsDocument;

  @Prop({ type: Object, default: [] })
  vital_signs: VitalSignsDocument;

  @Prop({ type: Object, default: [] })
  plyometric_measurements: PlyometricMeasurementsDocument;

  @Prop()
  somatocarta: number;

  @Prop()
  somatotype: number;

  @Prop({ type: Date, nullable: false, default: Date.now() })
  created_at: number;

  @Prop({ type: Date, nullable: false, default: Date.now() })
  updated_at: number;

  @Prop({ type: Date, nullable: true, default: null })
  deleted_at: number;
}

export const MedicalConsultationSchema = SchemaFactory.createForClass(
  MedicalConsultationDocument,
);
