import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AppFormula, AppParameters, BodyModel } from './app.interface';
import {evaluate} from 'mathjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-formula')
  getFormula(): AppFormula {
    return this.appService.getFormula();
  }

  @Post('post-formula')
  addFormulaObject(@Body() objectContent: AppParameters): string {
    return this.appService.addFormulaObject(objectContent);
  }

  @Delete('delete/:id')
  removeParametersObject(@Param('id') objectId: number): string {
    return this.appService.removeParametersObject(objectId);
  }

  //default
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //for advanced
  @Post('mathjs')
  mathjs(@Body() arrayOfObjects: BodyModel[]) {
    const [o, formula] = this.appService.forMathJS(arrayOfObjects);
    return evaluate(formula, o);
  }
}
