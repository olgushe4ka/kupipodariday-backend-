import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { Wish } from './entities/wishes.entity';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private userRepository: Repository<Wish>,
  ) {}

  async create(data: Partial<Wish>): Promise<Wish> {
    const wish = this.userRepository.create(data);
    return this.userRepository.save(wish);
  }

  async findOne(query: Partial<Wish>): Promise<Wish> {
    const options: FindOneOptions<Wish> = { where: query };
    return this.userRepository.findOne(options);
  }

  async findMany(query: Partial<Wish>): Promise<Wish[]> {
    const options: FindManyOptions<Wish> = { where: query };
    return this.userRepository.find(options);
  }

  async updateOne(
    query: Partial<Wish>,
    update: Partial<Wish>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(query, update);
  }

  async removeOne(query: Partial<Wish>): Promise<DeleteResult> {
    return this.userRepository.delete(query);
  }
}
