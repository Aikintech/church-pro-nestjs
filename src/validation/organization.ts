import { z } from 'zod';
import { extendApi } from '@anatine/zod-openapi';

export const CreateOrganizationSchema = extendApi(
  z.object({
    name: z.string().trim(),
  }),
);
