import { Module } from '@nestjs/common';
import { articleProviders } from 'src/article/article.providers';
import { eventProviders } from 'src/article/event.provider';
import { launchProviders } from 'src/article/launch.provider';
import { DatabaseModule } from 'src/database/database.module';
import { CronService } from './cron.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...articleProviders,
    ...launchProviders,
    ...eventProviders,
    CronService,
  ],
})
export class CronModule {}
