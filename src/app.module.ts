import { Module } from '@nestjs/common';
import { RequestController } from './request/request.controller';
import { AppService } from './app.service';

@Module({
    controllers: [RequestController],
    providers: [AppService]
})
export class AppModule {
}