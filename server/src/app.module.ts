import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PromptsModule } from './prompts/prompts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/stunning-db'),
    PromptsModule,
  ],
})
export class AppModule {}
