import { Injectable } from '@nestjs/common';
import { UserEntitie } from './entities/user.entitie';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Response } from './entities/response.entitie';
import { ServerResponse } from 'http';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<Response>{
    try{

      return {
        success: true,
        data: await this.userModel.find().exec(),
        message: ''
      };

    } catch (error) {

      return {
        success: false,
        data: null,
        message: error
      };

    };
  };

  async findOne(id: string): Promise<Response> {
    try{

      return {
        success: true,
        data: await this.userModel.findOne({ _id: id }).exec(),
        message: ''
      };

    } catch (error) {

      return {
        success: false,
        data: null,
        message: error
      };
      
    };
  };

  async create(user: UserEntitie): Promise<Response> {
    try{
      const createdUser = await new this.userModel(user);

      return {
        success: true,
        data: await createdUser.save(),
        message: ''
      };

    } catch (error) {

      return {
        success: false,
        data: null,
        message: error
      };
      
    };
  };

  async update(id: string, user: UserEntitie): Promise<Response> {
    try{
      user.updatedAt = new Date();

      return {
        success: true,
        data: await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec(),
        message: ''
      };

    } catch (error) {

      return {
        success: false,
        data: null,
        message: error
      };
      
    };
  };

  async delete(id: string): Promise<Response> {
    try{

      return {
        success: true,
        data: await this.userModel.findByIdAndRemove(id).exec(),
        message: ''
      };

    } catch (error) {

      return {
        success: false,
        data: null,
        message: error
      };
      
    };
  };
};