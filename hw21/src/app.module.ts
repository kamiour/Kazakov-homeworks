import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [StudentModule, GroupModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
