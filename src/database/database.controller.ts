import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DatabaseService } from './database.service';
import { TimestampDto } from './dto/timestamp.dto';

@ApiTags('database')
@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('ping')
  @ApiOperation({ summary: 'Ping the database' })
  @ApiResponse({
    status: 200,
    description: 'Returns the current timestamp from the database.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getPing(): Promise<TimestampDto> {
    return this.databaseService.getDateTime();
  }
}
