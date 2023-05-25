import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async findOne(query: Partial<User>): Promise<User> {
    const options: FindOneOptions<User> = { where: query };
    return this.userRepository.findOne(options);
  }

  //   async findOne(query: Partial<User>): Promise<User> {
  //     return this.userRepository.findOne(query);
  //   }

  async findMany(query: Partial<User>): Promise<User[]> {
    const options: FindManyOptions<User> = { where: query };
    return this.userRepository.find(options);
  }

  async updateOne(
    query: Partial<User>,
    update: Partial<User>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(query, update);
  }

  async removeOne(query: Partial<User>): Promise<DeleteResult> {
    return this.userRepository.delete(query);
  }
}
