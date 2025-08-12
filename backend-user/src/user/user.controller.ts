import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUser')
  getUser(data: { id: string }) {
    return this.userService.getUser(data);
  }

  @GrpcMethod('UserService', 'GetUsers')
  getUsers() {
    return this.userService.getUsers();
  }
}