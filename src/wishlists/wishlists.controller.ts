import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
  Body,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WishlistsService } from './wishlists.service';
import { Wishlist } from './entities/wishlists.entity';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistService: WishlistsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createWishlist(@Body() createWishlistDto: any): Promise<Wishlist> {
    return this.wishlistService.create(createWishlistDto);
  }

  @Get()
  async getAllWishlists(): Promise<Wishlist[]> {
    return this.wishlistService.findMany({});
  }

  @Get(':id')
  async getWishlistById(@Param('id') id: string): Promise<Wishlist> {
    return this.wishlistService.findOne({ id });
  }

  //   @Patch(':id')
  //   @UseGuards(AuthGuard('jwt'))
  //   async updateWishlist(
  //     @Param('id') id: string,
  //     @Body() updateWishlistDto: UpdateWishlistDto,
  //   ): Promise<Wishlist> {
  //     return this.wishlistService.updateOne(id, updateWishlistDto);
  //   }

  //   @Delete(':id')
  //   @UseGuards(AuthGuard('jwt'))
  //   async deleteWishlist(@Param('id') id: string): Promise<void> {
  //     return this.wishlistService.removeOne({ id });
  //   }
}
