import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Teacher } from '../schemas/teacher.schema';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TeacherModelToken') private readonly teacherModel: Model<Teacher>,
  ){}
  async createTeacher(teacher: Teacher) {
    return await this.teacherModel.create(teacher);
  }

  async getAllTeachers() {
    //return await this.teacherModel.find().lean().exec();
    return await this.teacherModel.aggregate([{$lookup: {from: "studentmodels", localField: "studentsId", foreignField: "_id", as: "students"}}]);
  }
}