import {
  Controller,
  Get,
  Patch,
  UseGuards,
  Req,
  Body,
  Param,
  NotFoundException,
  UnauthorizedException,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { UpdateProfileDto } from '../utilits/update-profile.dto';
import { User } from './entities/user.entity';
import { HashService } from '../hash/hashes.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly hashService: HashService,
  ) {}

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Req() req): Promise<User> {
    const userId = req.user.id;
    const user = await this.userService.findOne({ id: userId });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getUserProfile(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findOne({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Patch('profile')
  @UseGuards(AuthGuard('jwt'))
  async updateProfile(
    @Req() req,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<User> {
    const userId = req.user.id;
    const user = await this.userService.findOne({ id: userId });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (userId !== user.id) {
      throw new UnauthorizedException('Unauthorized');
    }

    if (updateProfileDto.password) {
      const hashedPassword = await this.hashService.hashPassword(
        updateProfileDto.password,
      );
      updateProfileDto.password = hashedPassword;
    }

    await this.userService.updateOne({ id: userId }, updateProfileDto);

    const updatedUser = await this.userService.findOne({ id: userId });

    return updatedUser;
  }

  @Get('search')
  @UseGuards(AuthGuard('jwt'))
  async searchUsers(@Query('criteria') criteria: string): Promise<User[]> {
    return this.userService.findMany(criteria);
  }
}
