import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './task.model';
import { RpcException } from '@nestjs/microservices';


@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {taskId: '1', userId: '1', title: 'First Task', description: 'This is a sample task', completed: false},
    {taskId: '2', userId: '1', title: 'Second Task', description: 'This is sample task (second)', completed: true},
    {taskId: '3', userId: '2', title: '2`s First Task', description: 'This is 2`s task', completed: false},
    {taskId: '4', userId: '3', title: '3`s First Task', description: 'This is 3`s task', completed: true},
];

  createTask(userId: string, title: string, description: string): Task {
    const newTask: Task = {
      taskId: uuidv4(),
      userId: userId,
      title,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  getTask(taskId: string): Task | null {
    console.log('call getTask in TaskService(backend)');
    const task = this.tasks.find(task => task.taskId === taskId);
    if (!task) {
      throw new RpcException({ code: 5, message: `Task with id ${taskId} not found` }); 
    }
    return task;
  }

  getTasks(userId: string): { tasks: Task[] } {
    const filtered = this.tasks.filter(task => task.userId === userId);
    return { tasks: filtered };
  }

  updateTask(taskId: string, userId: string, title: string, description: string, completed: boolean): Task | null {
    const task = this.getTask(taskId);
    if (!task) return null;
    task.userId = userId;
    task.title = title;
    task.description = description;
    task.completed = completed;
    return task;
  }

  deleteTask(taskId: string): boolean {
    const taskIndex = this.tasks.findIndex(task => task.taskId === taskId);
    if (taskIndex === -1) return false;
    this.tasks.splice(taskIndex, 1);
    return true;
  }
}