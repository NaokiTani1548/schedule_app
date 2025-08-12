import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from './user.model';
import { lastValueFrom, Observable } from 'rxjs';

interface UserServiceGrpc {
  getUser(data: { id: string }): Observable<User>;
  getUsers(data: {}): Observable<{ users: User[] }>;
}

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceGrpc;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceGrpc>('UserService');
  }

  async getUser(id: string): Promise<User> {
    return await lastValueFrom(this.userService.getUser({ id }));
  }

  async getUsers(): Promise<User[]> {
    const res = await lastValueFrom(this.userService.getUsers({}));
    console.log('getUsers response:', res);
    return res?.users ?? [];
  }
}
