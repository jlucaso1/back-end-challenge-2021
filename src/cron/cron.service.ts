import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { Article } from 'src/article/entities/article.entity';
import { Event } from 'src/article/entities/event.entity';
import { Launch } from 'src/article/entities/launch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CronService {
  constructor(
    @Inject('ARTICLE_REPOSITORY')
    private articleRepository: Repository<Article>,
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Event>,
    @Inject('LAUNCH_REPOSITORY')
    private launchRepository: Repository<Launch>,
  ) {}
  @Cron('0 9 * * *')
  async getDataAndImportToDB() {
    // delete all entries from the database
    await this.eventRepository.query('DELETE FROM "event"');
    await this.launchRepository.query('DELETE FROM "launch"');
    await this.articleRepository.query('DELETE FROM "article"');

    // get all articles from the API
    var articles = (
      await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
    ).data as Article[];
    // save all articles to the database
    var savedArticles = await this.articleRepository.save(articles);
  }
}
