import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigType<typeof config>) => ({
        uri: `mongodb+srv://FrancoTest:${configService.database.password}@cluster0.bdscb.mongodb.net/${configService.database.name}?retryWrites=true&w=majority`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
      inject: [config.KEY],
    }),
  ],
})
export class MongoModule {}
