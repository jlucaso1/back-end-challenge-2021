import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
  ) {}

  getArticles(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  getArticle(id: number): Promise<Article> {
    return this.articleRepository.findOneOrFail(id);
  }

  createArticle(article: Article): Promise<Article> {
    return this.articleRepository.save(article);
  }

  updateArticle(id: number, article: Article): Promise<Article> {
    article.id = id;
    return this.articleRepository.save(article);
  }

  async deleteArticle(id: number): Promise<void> {
    await this.articleRepository.delete(id);
    return;
  }
}
