import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column((type) => Boolean)
  featured: boolean;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  newsSite: string;

  @Column()
  summary: string;

  @Column()
  publishedAt: string;

  @Column()
  isPublished: boolean;

  @Column(() => Launch, { array: true })
  launches: [Launch];

  @Column(() => Event, { array: true })
  events: [Event];
}

class Launch {
  @Column()
  id: string;
  @Column()
  provider: string;
}

class Event {
  @Column()
  id: string;
  @Column()
  provider: string;
}
