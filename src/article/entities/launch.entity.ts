import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from './article.entity';

@Entity()
export class Launch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @ManyToOne((type) => Article, (article) => article.launches, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  article: Article;
}
