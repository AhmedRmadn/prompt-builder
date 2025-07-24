import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromptDocument = Prompt & Document;

@Schema({ timestamps: true })
export class Prompt {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true })
  sections: string[];
}

export const PromptSchema = SchemaFactory.createForClass(Prompt);
