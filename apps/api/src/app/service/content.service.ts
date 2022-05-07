import { Injectable } from '@nestjs/common';
import { ContentRepository } from '../repository/content.repository';
import { Content } from '../model/content.schema';
import { CreateContentDto, FindAllContentDto } from '@shared';

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository) {}

  create(createContentDto: CreateContentDto): Promise<Content> {
    createContentDto.savedAt = new Date();
    return this.contentRepository.create(createContentDto);
  }

  findAll(findAllContentDto: FindAllContentDto): Promise<Content[]> {
    return this.contentRepository.findAll(findAllContentDto);
  }
}
