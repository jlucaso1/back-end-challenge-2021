import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ConfigModule.forRoot(), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
