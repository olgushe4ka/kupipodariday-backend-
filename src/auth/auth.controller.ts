// import { Controller, Post, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { CreateUserDto, SigninUserDto } from './dto/auth.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('/signup')
//   signUp(@Body() createUserDto: CreateUserDto) {
//     return this.authService.signUp(createUserDto);
//   }

//   @Post('/signin')
//   signIn(@Body() signinUserDto: SigninUserDto) {
//     return this.authService.signIn(signinUserDto);
//   }
// }

import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signIn(@Request() req) {
    const token = this.jwtService.sign(req.user);
    return { token };
  }
}
