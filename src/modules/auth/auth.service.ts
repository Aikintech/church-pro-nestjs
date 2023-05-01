import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { OrganizationService } from '../organization/organization.service';
import { WorkspaceService } from '../workspace/workspace.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly organizationService: OrganizationService,
    private readonly workspaceService: WorkspaceService,
    private readonly userService: UserService,
  ) {}

  async login(loginDto: LoginDto) {
    return loginDto;
  }

  async register(registerDto: RegisterDto) {
    //
  }
}
