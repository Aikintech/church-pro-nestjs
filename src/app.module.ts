import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { StagingModule } from './modules/staging/staging.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    OrganizationModule,
    WorkspaceModule,
    PrismaModule,
    StagingModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
