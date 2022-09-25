import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema({ collection: 'patients' })
export class PatientDocument extends Document {
  @Prop({ type: String, default: () => uuidv4() })
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  first_name: string;

  @Prop()
  second_name: string;

  @Prop({ type: Date, nullable: false })
  date_of_birth: Date;

  @Prop()
  email: string;

  @Prop()
  ocupation: string;

  @Prop()
  phone: string;

  @Prop()
  reason: string;

  @Prop()
  sex: string;

  @Prop({ type: Date, nullable: false, default: Date.now() })
  created_at: Date;

  @Prop({ type: Date, nullable: false, default: Date.now() })
  updated_at: Date;

  @Prop({ type: Date, nullable: true, default: null })
  deleted_at: Date;

  @Prop({ type: Date, nullable: false, default: null })
  confirmation_at: Date;
}

export const PatientSchema = SchemaFactory.createForClass(PatientDocument);
