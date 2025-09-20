import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'task',
          protoPath: join(__dirname, '../../proto/task.proto'),
          url: process.env.GRPC_BACKEND_TASK_URL || 'localhost:5001',
        },
      },
    ]),
  ],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
