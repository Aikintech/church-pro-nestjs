import { z } from 'zod';
import { extendApi } from '@anatine/zod-openapi';

export const LoginSchema = extendApi(
  z.object({
    email: z.string().trim().email(),
    password: z.string().trim(),
  }),
);

export const RegisterSchema = extendApi(
  z.object({
    firstName: z.string().trim(),
    lastName: z.string().trim(),
    email: z.string().trim().email(),
    password: z.string().trim(),
    passwordConfirmation: z.string().trim(),
    phoneNumber: z.string().trim(),
    organizationName: z.string().trim(),
    defaultBranchName: z.string().trim(),
    position: z.string().trim(),
    terms: z.boolean(),
  }),
);
