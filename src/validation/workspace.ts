import { z } from 'zod';
import { extendApi } from '@anatine/zod-openapi';

export const CreateOWorkspaceSchema = extendApi(
  z.object({
    name: z.string().trim(),
    organizationId: z.number(),
  }),
);
