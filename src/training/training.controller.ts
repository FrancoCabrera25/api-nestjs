import { ForbiddenException } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { WordsDict } from '..//model/wordsDict';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @ApiResponse({ status: 200 })
  @Get('getcantwordtext/:text')
  getHello(@Param('text') text: string): WordsDict {
    return this.trainingService.getCantWordRepeatInText(text);
  }
}
