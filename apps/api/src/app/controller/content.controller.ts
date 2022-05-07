import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { ContentService } from '../service/content.service';
import { CreateContentDto, FindAllContentDto } from '@shared';
import { Content } from '../model/content.schema';

@Controller('contents')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  findAll(@Query() findAllContentDto: FindAllContentDto): Promise<Content[]> {
    return this.contentService.findAll(findAllContentDto);
  }

  @Post()
  create(@Body() createContentDto: CreateContentDto): Promise<Content> {
    return this.contentService.create(createContentDto);
  }
}
