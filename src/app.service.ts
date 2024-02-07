import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  validateInput(payload: { wait: number; answer: string }) { // проверка корректности входных данных
    if (!payload.wait || payload.wait < 0) { 
      throw new Error('Invalid input: wait must be a non-negative number');
    }
    if (!payload.answer || payload.answer.length < 3) { 
      throw new Error('Invalid input: answer must be a string with a length of at least 3');
    }
  }

  async waitAndReturnAnswer(wait: number, answer: string) { // возвращает answer по истечению времени wait
    this.validateInput({ wait, answer });
    return new Promise((resolve) => setTimeout(() => resolve({ answer }), wait * 1000));
  }
}