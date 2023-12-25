import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { AuthController } from './module/auth/controllers/auth.controller';
import { AuthService } from './module/auth/service/service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
