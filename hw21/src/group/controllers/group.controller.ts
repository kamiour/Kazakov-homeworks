import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GroupService } from '../services/groups.service';
import { Group } from '../schemas/group.schema';

@Controller('group')
export class GroupController {
  constructor(
    public groupService: GroupService
  ){}

  @Post('')
  async createGroup(@Body() body: Group ) {
    const res = await this.groupService.createGroup(body);
    return res;
  }

  @Get('aggregate')
  async AggregateGroup() {
    const res = await this.groupService.aggregateGroup();
    return res;
  }
}
