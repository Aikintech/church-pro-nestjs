import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OrganizationService } from '../organization/organization.service';
import { WorkspaceService } from '../workspace/workspace.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    OrganizationService,
    WorkspaceService,
    UserService,
  ],
})
export class AuthModule {}
