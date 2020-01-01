import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Group } from '../schemas/group.schema';
import * as mongoose from 'mongoose';
export let ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class GroupService {
  constructor(
    @Inject('GroupModelToken') private readonly groupModel: Model<Group>,
  ){}
  async createGroup(group: Group) {
    return await this.groupModel.create(group);
  }

  async aggregateGroup() {
    //return await this.groupModel.findOne({_id: id}).lean().exec();
    return await this.groupModel.aggregate([{$lookup: {from: "studentmodels", localField: "studentId", foreignField: "_id", as: "combined"}}]);
  }
}