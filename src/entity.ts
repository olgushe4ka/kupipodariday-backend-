// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   OneToOne,
//   ManyToMany,
//   JoinTable,
// } from 'typeorm';
// import { Wishlist } from './wishlist.entity';
// import { Gift } from './gift.entity';
// import { Request } from './request.entity';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @OneToOne(() => Wishlist, (wishlist) => wishlist.user)
//   wishlist: Wishlist;

//   @ManyToMany(() => Gift)
//   @JoinTable()
//   gifts: Gift[];

//   @OneToMany(() => Request, (request) => request.user)
//   requests: Request[];
// }

// @Entity()
// export class Wishlist {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @OneToOne(() => User, (user) => user.wishlist)
//   user: User;
// }

// @Entity()
// export class Gift {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @ManyToMany(() => User)
//   @JoinTable()
//   users: User[];
// }

// @Entity()
// export class Request {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   description: string;

//   @ManyToOne(() => User, (user) => user.requests)
//   user: User;
// }
