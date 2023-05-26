import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  }
}
