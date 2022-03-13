import { Connection } from 'typeorm';
import { Article } from './article.entity';

export const articleProviders = [
  {
    provide: 'ARTICLE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: ['DATABASE_CONNECTION'],
  },
];
