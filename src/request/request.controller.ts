import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('api/v1')
export class RequestController {
  constructor(private readonly appService: AppService) {}

  @Post('request')
  async validateAndWait(@Body() payload: { wait: number; answer: string }) {
    this.appService.validateInput(payload); // проверка корректности входных данных
    return await this.appService.waitAndReturnAnswer(payload.wait, payload.answer); // возвращает answer по истечению времени wait 
  }
}