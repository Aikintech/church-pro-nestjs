import { createZodDto } from '@anatine/zod-nestjs';
import { CreateOWorkspaceSchema } from 'src/validation/workspace';

export class CreateWorkspaceDto extends createZodDto(CreateOWorkspaceSchema) {}
