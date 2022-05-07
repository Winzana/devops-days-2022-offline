import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Content, ContentDocument } from '../model/content.schema';
import { CreateContentDto, FindAllContentDto } from '@shared';

@Injectable()
export class ContentRepository {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>
  ) {}

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const createdContent = new this.contentModel(createContentDto);
    return createdContent.save();
  }

  async findAll(findAllContentDto: FindAllContentDto): Promise<Content[]> {
    if (findAllContentDto.lastUpdate)
      return this.contentModel
        .find({ savedAt: { $gte: new Date(findAllContentDto.lastUpdate) } })
        .sort({ savedAt: -1 })
        .exec();
    return this.contentModel.find().sort({ savedAt: -1 }).exec();
  }
}
