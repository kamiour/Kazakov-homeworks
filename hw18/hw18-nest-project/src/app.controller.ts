import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-formula')
  getFormula(): object {
    return this.appService.getFormula();
  }

  @Post('post-formula')
  addFormulaObject(@Body() objectContent: object) {
    return this.appService.addFormulaObject(objectContent);
  }

  @Delete('delete/:id')
  removeParametersObject(@Param('id') objectId: number) {
    return this.appService.removeParametersObject(objectId);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
