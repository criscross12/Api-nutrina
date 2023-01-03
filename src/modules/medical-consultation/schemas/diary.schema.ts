import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema({ collection: 'diary' })
export class DiaryDocument extends Document {
  @Prop({ type: String, default: () => uuidv4() })
  uuid: string;

  @Prop()
  user_uuid: string;

  @Prop()
  patient_uuid: string;

  @Prop({ type: Date, nullable: false })
  dayOfDate: number;

  @Prop()
  status: boolean;

  @Prop()
  description: string;

  @Prop({ type: Date, nullable: false, default: Date.now() })
  created_at: number;

  @Prop({ type: Date, nullable: false, default: Date.now() })
  updated_at: number;

  @Prop({ type: Date, nullable: true, default: null })
  deleted_at: number;
}

export const DiarySchema = SchemaFactory.createForClass(DiaryDocument);
