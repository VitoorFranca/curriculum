import { Injectable } from '@nestjs/common';
import { UserEntitie } from './entities/user.entitie';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]>{
    return await this.userModel.find().exec();
  };

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id }).exec();
  };

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = await new this.userModel(user);
    return await createdUser.save();
  };

  async update(id: string, user: UserEntitie): Promise<User> {
    user.updatedAt = new Date();
    return await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  };

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id).exec();
  };
};