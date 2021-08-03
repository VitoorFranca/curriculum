import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

  // IMPORTS
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports:
    [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.jhzfs.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ),
    ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
