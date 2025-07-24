import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from './user.model'

interface UserServiceGrpc {
  getUser(data: { id: string }): Promise<User>;
}

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceGrpc;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceGrpc>('UserService');
  }

  getUser(id: string): Promise<User> {
    return this.userService.getUser({ id });
  }
}
