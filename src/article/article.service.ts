import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create.article.dto';
import { UpdateArticleDto } from './dto/update.article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
  ) {}

  getArticles(): Promise<Article[]> {
    return this.articleRepository.find({
      relations: ['events', 'launches'],
    });
  }

  async getArticle(id: number): Promise<Article> {
    var article = await this.articleRepository.findOne(id, {
      relations: ['events', 'launches'],
    });
    if (!article)
      throw new HttpException('Article not found.', HttpStatus.NOT_FOUND);
    return article;
  }

  createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleRepository.save(createArticleDto);
  }

  async updateArticle(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    var old_article = await this.getArticle(id);
    var merged_article = { ...old_article, ...updateArticleDto };
    await this.articleRepository.save(merged_article);
    return;
  }

  async deleteArticle(id: number): Promise<void> {
    var article = await this.getArticle(id);
    await this.articleRepository.remove(article);
    return;
  }
}
