import 'dotenv/config';
import { Article } from '../src/article/entities/article.entity';
import { Event } from '../src/article/entities/event.entity';
import { Launch } from '../src/article/entities/launch.entity';
import { createConnection } from 'typeorm';
import axios from 'axios';

(async () => {
  const connection = await createConnection({
    type: 'postgres',
    host: process.env.DATABASE_URL,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_ID,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const eventRepository = connection.getRepository(Event);
  const launchRepository = connection.getRepository(Launch);
  const articleRepository = connection.getRepository(Article);
  //remove all entries from the database
  await eventRepository.query('DELETE FROM "event"');
  await launchRepository.query('DELETE FROM "launch"');
  await articleRepository.query('DELETE FROM "article"');

  // get all articles from the API
  var articles = (
    await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
  ).data as Article[];

  var savedArticles = await articleRepository.save(articles);

  await connection.close();
  console.log(savedArticles);
})();
