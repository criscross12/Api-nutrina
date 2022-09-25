import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'medical_consultation' })
export class MedicalConsultationDocument extends Document {
  @Prop()
  account_uuid: string;

  @Prop()
  user_uuid: string;

  @Prop()
  patient_uuid: string;

  @Prop({ type: Object, default: [] })
  basic_measurements: Object;

  @Prop({ type: Object, default: [] })
  body_measurements: Object;

  @Prop({ type: Object, default: [] })
  vital_signs: Object;

  @Prop({ type: Object, default: [] })
  plyometric_measurements: Object;

  @Prop({ type: Object, default: [] })
  circumferences: Object;

  @Prop()
  somatocarta: number;

  @Prop()
  somatotype: number;

  @Prop()
  fao_who_onu: number;

  @Prop()
  harris_benedict: number;

  @Prop()
  valencia: number;

  @Prop()
  mifflin_st: number;

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
