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

export class UpdateArticleDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  featured: boolean;

  @IsOptional()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsUrl()
  imageUrl: string;

  @IsOptional()
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
