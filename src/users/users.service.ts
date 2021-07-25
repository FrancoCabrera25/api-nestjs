import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

  async createOneUser(
    name: string,
    surname: string,
    email: string,
    password: string,
  ) {
    const newUser = new this.userModel({
      name,
      surname,
      email,
      password,
    });
    const result = await newUser.save();
    return result.id as string;
  }
}
