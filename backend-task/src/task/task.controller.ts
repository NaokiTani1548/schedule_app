import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskService } from './task.service';

// snakeCaseが利用不可なので、camelCaseに変更
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TaskService', 'CreateTask')
  createTask(data: { userId: string, title: string, description: string }) {
    return this.taskService.createTask(data.userId, data.title, data.description);
  }

  @GrpcMethod('TaskService', 'GetTask')
  getTask(data: { taskId: string }) {
    return this.taskService.getTask(data.taskId);
  }

  @GrpcMethod('TaskService', 'GetTasks')
  getTasks(data: { userId: string }) {
    return this.taskService.getTasks(data.userId);
  }

  @GrpcMethod('TaskService', 'UpdateTask')
  updateTask(data: { taskId: string, userId: string,  title: string, description: string, completed: boolean }) {
    return this.taskService.updateTask(data.taskId, data.userId, data.title, data.description, data.completed);
  }

  @GrpcMethod('TaskService', 'DeleteTask')
  deleteTask(data: { taskId: string }) {
    return this.taskService.deleteTask(data.taskId) ? {} : null;
  }
}