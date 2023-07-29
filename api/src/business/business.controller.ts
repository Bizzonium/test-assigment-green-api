import { Controller, Get } from '@nestjs/common';
import { BusinessService } from './business.service';
import { Observable } from 'rxjs';

@Controller('')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get('ping')
  getPing(): Observable<any> {
    return this.businessService.getPing();
  }
}
