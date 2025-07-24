import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Prompt, PromptDocument } from './prompt.schema';
import { Model } from 'mongoose';
import { CreatePromptDto } from './dto/create-prompt.dto';

@Injectable()
export class PromptsService {
  constructor(
    @InjectModel(Prompt.name) private promptModel: Model<PromptDocument>,
  ) {}

  async create(dto: CreatePromptDto): Promise<Prompt> {
    // const dummySections = ['Hero', 'About', 'Contact'];

    const created = new this.promptModel({
      name: dto.name,
      sections: dto.sections,
    });

    return created.save();
  }

  async findAll(): Promise<Prompt[]> {
    return this.promptModel.find().sort({ createdAt: -1 }).exec();
  }

  async findById(id: string): Promise<Prompt | null> {
    return this.promptModel.findById(id).exec();
  }
}
