import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticles() {
    return this.articleService.getArticles();
  }

  @Get('/:id')
  getArticle(@Param('id') id: number) {
    return this.articleService.getArticle(id);
  }

  @Post()
  createArticle(@Body() article: Article) {
    return this.articleService.createArticle(article);
  }

  @Put()
  updateArticle(@Body() article: Article) {
    return this.articleService.updateArticle(article.id, article);
  }

  @Delete()
  deleteArticle(@Body('id') id: number) {
    return this.articleService.deleteArticle(id);
  }
}
