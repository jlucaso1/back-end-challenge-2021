import { Connection } from 'typeorm';
import { Launch } from './entities/launch.entity';

export const launchProviders = [
  {
    provide: 'LAUNCH_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Launch),
    inject: ['DATABASE_CONNECTION'],
  },
];
