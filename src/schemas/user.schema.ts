import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  status: string;

  @Prop()
  isPremium: boolean;

  @Prop({type: Date, default: new Date() })
  createdAt: Date;

  @Prop({type: Date, default: new Date() })
  updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);