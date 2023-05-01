import * as argon2 from 'argon2';

export class Hash {
  static async make(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  static async check(password: string, hash: string): Promise<boolean> {
    return await argon2.verify(hash, password);
  }
}
