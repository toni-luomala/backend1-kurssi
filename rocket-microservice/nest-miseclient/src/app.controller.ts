import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Servicestä saatu data näkyy osoitteessa http://localhost:3000/next-launch
  @Get('next-launch')
  getNextLaunchRemainingTime() {
    return this.appService.getNextLaunchRemainingTime();
  }
}
