import { Controller, Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AppFormula, QueryParams } from './app.inteface';
import { AppParameters } from './app.inteface';


@Controller('parameter')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getFormula(): AppFormula {
    return this.appService.getFormula();
  }

  @Get('get/:id')
  getParameterByID(@Param('id') objectId: number): AppParameters {
    return this.appService.getParameterByID(objectId);
  }

  @Delete('delete/:id')
  removeParameterByID(@Param('id') objectId: number): string {
    return this.appService.removeParameterByID(objectId);
  }

  @Put ('put')
  putParameterByID(@Body() objectContent: AppParameters): string {
    return this.appService.putParameterByID(objectContent);
  }

  @Get('getByQuery')
  getParametersByQuery(@Query() params: QueryParams): AppParameters[] {
    return this.appService.getParametersByQuery(params.min, params.max);
  }

  //default
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
