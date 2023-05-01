import { Module } from '@nestjs/common';
import { StagingService } from './staging.service';
import { StagingController } from './staging.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [StagingController],
  providers: [StagingService, PrismaService],
})
export class StagingModule {}
