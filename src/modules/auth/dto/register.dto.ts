import { createZodDto } from '@anatine/zod-nestjs';
import { RegisterSchema } from 'src/validation/auth';

export class RegisterDto extends createZodDto(RegisterSchema) {}
