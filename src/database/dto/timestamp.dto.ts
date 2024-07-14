import { ApiProperty } from '@nestjs/swagger';

export class TimestampDto {
  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'The current timestamp from the database',
  })
  now: string;
}
