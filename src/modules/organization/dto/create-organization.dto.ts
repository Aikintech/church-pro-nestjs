import { createZodDto } from '@anatine/zod-nestjs';
import { CreateOrganizationSchema } from 'src/validation/organization';

export class CreateOrganizationDto extends createZodDto(
  CreateOrganizationSchema,
) {}
