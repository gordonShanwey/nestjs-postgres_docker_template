import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from './database-configuration'; // Adjust the import path as necessary
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfiguration,
    }),
  ],
  providers: [DatabaseService],
  controllers: [DatabaseController],
})
export class DatabaseModule {}
