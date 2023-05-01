import { createZodDto } from '@anatine/zod-nestjs';
import { LoginSchema } from 'src/validation/auth';

export class LoginDto extends createZodDto(LoginSchema) {}
