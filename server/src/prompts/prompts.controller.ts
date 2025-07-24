import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PromptsService } from './prompts.service';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { Prompt } from './prompt.schema';

@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptsService: PromptsService) {}

  @Post()
  async create(@Body() dto: CreatePromptDto): Promise<Prompt> {
    console.log(dto);
    return this.promptsService.create(dto);
  }

  @Get()
  async findAll(): Promise<Prompt[]> {
    return this.promptsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Prompt | null> {
    return this.promptsService.findById(id);
  }
}
