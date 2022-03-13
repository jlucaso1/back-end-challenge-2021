import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from './article.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider: string;

  @ManyToOne((type) => Article, (article) => article.events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  article: Article;
}
