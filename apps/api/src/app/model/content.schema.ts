import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.Date })
  savedAt: Date;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
