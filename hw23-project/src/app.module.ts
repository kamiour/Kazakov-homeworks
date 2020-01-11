import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [ProductModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
