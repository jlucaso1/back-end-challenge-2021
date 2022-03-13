import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ArticleController } from './article.controller';
import { articleProviders } from './article.providers';
import { ArticleService } from './article.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [...articleProviders, ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
