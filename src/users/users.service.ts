import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  UpdateResult,
  DeleteResult,
  Like,
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

  //   async findMany(query: Partial<User>): Promise<User[]> {
  //     const options: FindManyOptions<User> = { where: query };
  //     return this.userRepository.find(options);
  //   }

  async updateOne(
    query: Partial<User>,
    update: Partial<User>,
  ): Promise<UpdateResult> {
    return this.userRepository.update(query, update);
  }

  //   async removeOne(query: Partial<User>): Promise<DeleteResult> {
  //     return this.userRepository.delete(query);
  //   }

  //   async findOne(condition: Partial<User>): Promise<User | undefined> {
  //     return this.userRepository.findOne({ where: condition });
  //   }

  //   async updateOne(
  //     condition: Partial<User>,
  //     data: Partial<User>,
  //   ): Promise<User> {
  //     await this.userRepository.update(condition, data);
  //     return this.userRepository.findOne(query);
  //   }

  async removeOne(condition: Partial<User>): Promise<void> {
    await this.userRepository.delete(condition);
  }

  async findMany(criteria: string): Promise<User[]> {
    return this.userRepository.find({
      where: [
        { username: Like(`%${criteria}%`) },
        { email: Like(`%${criteria}%`) },
      ],
    });
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import {
//   Repository,
//   FindOneOptions,
//   UpdateResult,
//   DeleteResult,
// } from 'typeorm';
// import { User } from './entities/user.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//   ) {}

//   async create(data: Partial<User>): Promise<User> {
//     const user = this.userRepository.create(data);
//     return this.userRepository.save(user);
//   }

//   async findOne(query: FindOneOptions<User>): Promise<User> {
//     return this.userRepository.findOne(query);
//   }

//   async updateOne(
//     query: Partial<User>,
//     update: Partial<User>,
//   ): Promise<UpdateResult> {
//     return this.userRepository.update(query, update);
//   }

//   async removeOne(condition: Partial<User>): Promise<DeleteResult> {
//     return this.userRepository.delete(condition);
//   }
// }
