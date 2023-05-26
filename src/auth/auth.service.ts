import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../hash/hashes.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: Partial<User>,
    password: string,
  ): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (
      user &&
      (await this.hashService.comparePasswords(password, user.password))
    ) {
      return user;
    }
    return null;
  }
}
