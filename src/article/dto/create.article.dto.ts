import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  featured: boolean;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  newsSite: string;

  @IsOptional()
  @IsString()
  summary: string = '';

  @IsOptional()
  @IsBoolean()
  isPublished: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Launch)
  launches: Launch[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Launch)
  events: Event[];
}

class Launch {
  @IsNotEmpty()
  @IsString()
  provider: string;
}

class Event {
  @IsNotEmpty()
  @IsString()
  provider: string;
}
