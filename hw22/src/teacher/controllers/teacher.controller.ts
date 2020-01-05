import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { TeacherService } from '../services/teachers.service';
import { Teacher } from '../schemas/teacher.schema';

@Controller('teacher')
export class TeacherController {
  constructor(
    //public teacherService: TeacherService
    @Inject('newTokenName') public teacherService: TeacherService
  ){}
  @Get()
  async getAllTeachers() {
    const res = await this.teacherService.getAllTeachers();
    return res;
  }

  @Post()
  async createTeacher(@Body() body: Teacher ) {
    const res = await this.teacherService.createTeacher(body);
    return res;
  }
}
