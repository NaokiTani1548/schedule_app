import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskService } from './task.service';

// snakeCaseが利用不可なので、camelCaseに変更
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TaskService', 'createTask')
  createTask(data: { userId: string, title: string, description: string }) {
    return this.taskService.createTask(data.userId, data.title, data.description);
  }

  @GrpcMethod('TaskService', 'getTask')
  getTask(data: { taskId: string }) {
    console.log('call getTask gRPC method in TaskController');
    return this.taskService.getTask(data.taskId);
  }

  @GrpcMethod('TaskService', 'getTasks')
  getTasks(data: { userId: string }) {
    return this.taskService.getTasks(data.userId);
  }

  @GrpcMethod('TaskService', 'updateTask')
  updateTask(data: { taskId: string, userId: string,  title: string, description: string, completed: boolean }) {
    return this.taskService.updateTask(data.taskId, data.userId, data.title, data.description, data.completed);
  }

  @GrpcMethod('TaskService', 'deleteTask')
  deleteTask(data: { taskId: string }) {
    return this.taskService.deleteTask(data.taskId) ? {} : null;
  }
}