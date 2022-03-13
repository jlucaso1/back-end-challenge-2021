import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from './entities/article.entity';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create.article.dto';
import { UpdateArticleDto } from './dto/update.article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articleService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticle(id);
  }

  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleService.createArticle(createArticleDto);
  }

  @Put(':id')
  updateArticle(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateArticle(id, updateArticleDto);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: number) {
    return this.articleService.deleteArticle(id);
  }
}
