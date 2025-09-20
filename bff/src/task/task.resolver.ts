import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TaskService } from './task.service';

@Resolver('Task')
export class TaskResolver {
    constructor(private taskService: TaskService) {}

    @Query('getTasks')
    async getTasks(@Args('userId') userId: string) {
        return this.taskService.getTasks(userId);
    }

    @Query('getTask')
    async getTask(@Args('taskId') taskId: string) {
        console.log('call getTask resolver');
        return this.taskService.getTask(taskId);
    }

    @Mutation('updateTask')
    async updateTask(
        @Args('taskId') taskId: string,
        @Args('userId') userId: string,
        @Args('title') title: string,
        @Args('description') description: string,
        @Args('completed') completed: boolean,
    ) {
        return this.taskService.updateTask(taskId, userId, title, description, completed);
    }

    @Mutation('deleteTask')
    async deleteTask(@Args('taskId') taskId: string) {
        return this.taskService.deleteTask(taskId);
    }
}