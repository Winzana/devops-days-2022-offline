import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentController } from './controller/content.controller';
import { Content, ContentSchema } from './model/content.schema';
import { ContentRepository } from './repository/content.repository';
import { ContentService } from './service/content.service';

const user = process.env.MONGO_INITDB_USERNAME || 'cloud';
const password = process.env.MONGO_INITDB_PASSWORD || 'cloud';
const host = process.env.MONGO_INITDB_HOST || 'localhost';

const connectionString =
  process.env.MONGO_CONNECTION_STRING ||
  `mongodb://${user}:${password}@${host}/`;
const replicaSetName = process.env.MONGO_REPLICA_SET_NAME || 'rs0';

console.log(connectionString);
@Module({
  imports: [
    MongooseModule.forRoot(connectionString),
    MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }]),
  ],
  controllers: [ContentController],
  providers: [ContentRepository, ContentService],
})
export class AppModule {}
