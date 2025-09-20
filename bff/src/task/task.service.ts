import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Task } from './task.model';
import { lastValueFrom, Observable } from 'rxjs';

interface TaskServiceGrpc {
  getTasks(data: { userId: string }): Observable<{ tasks: Task[] }>;
  getTask(data: { taskId: string }): Observable<Task>;
  updateTask(data: { taskId: string, userId: string, title: string, description: string, completed: boolean }): Observable<Task>;
  deleteTask(data: { taskId: string }): Observable<{ success: boolean }>;
}

@Injectable()
export class TaskService implements OnModuleInit {
  private taskService: TaskServiceGrpc;

  constructor(@Inject('TASK_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.taskService = this.client.getService<TaskServiceGrpc>('TaskService');
  }

  async getTasks(userId: string): Promise<Task[]> {
    const res = await lastValueFrom(this.taskService.getTasks({ userId }));
    console.log('getTasks response:', res);
    return res?.tasks ?? [];
  }

  async getTask(taskId: string): Promise<Task> {
    console.log('call getTask gRPC');
    return await lastValueFrom(this.taskService.getTask({ taskId }));
  }

  async updateTask(taskId: string, userId: string, title: string, description: string, completed: boolean): Promise<Task> {
    return await lastValueFrom(this.taskService.updateTask({ taskId, userId, title, description, completed }));
  }

  async deleteTask(taskId: string): Promise<boolean> {
    const res = await lastValueFrom(this.taskService.deleteTask({ taskId }));
    return res?.success ?? false;
  }
}