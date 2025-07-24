import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    { id: '1', name: 'Taro Yamada' },
    { id: '2', name: 'Hanako Tanaka' },
  ];

  getUser({ id }: { id: string }) {
    const user = this.users.find((u) => u.id === id);
    return user || { id, name: 'Unknown User' };
  }
}