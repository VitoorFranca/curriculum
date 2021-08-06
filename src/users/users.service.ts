import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]>{
    return await this.userModel.find().exec();
  };

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id }).exec();
  };

  async create(createUserDto: CreateUserDto): Promise<User> {

    if(await this.userModel.findOne({ email: createUserDto.email }).exec())
      throw new HttpException(`Email ${createUserDto.email} already exists`, HttpStatus.CONFLICT);

    const createdUser = new this.userModel(createUserDto);
    const user = await createdUser.save();
    user.password = undefined;
    return user;
  };

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    updateUserDto.updatedAt = new Date();
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  };

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id).exec();
  };
};