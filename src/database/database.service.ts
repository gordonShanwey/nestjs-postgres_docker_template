// src/database/database.service.ts
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async getDateTime(): Promise<{ now: string }> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      const result = await queryRunner.query('SELECT NOW() as now;');
      return result[0];
    } catch (error) {
      console.error('Error querying the database:', error);
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
