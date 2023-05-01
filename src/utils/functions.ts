import { randomUUID as uuid } from 'crypto';

export const generateUniqueId = () => {
  return uuid({ disableEntropyCache: true });
};
