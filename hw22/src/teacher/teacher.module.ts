import { Module } from '@nestjs/common';
import { TeacherController } from './controllers/teacher.controller';
import { DatabaseModule } from '../database/database.module';
import { teacherProvider } from './teacher.providers';
import { TeacherService } from './services/teachers.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [{
    provide: 'newTokenName',
    useClass: TeacherService,
  }, teacherProvider],
})
export class TeacherModule {}
