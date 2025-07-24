// schema-first
import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query('getUser')
  async getUser(@Args('id') id: string) {
    return this.userService.getUser(id);
  }
}

// code-first
// import { Args, Query, Resolver, ObjectType, Field } from '@nestjs/graphql';
// import { UserService } from './user.service';

// @ObjectType()
// class User {
//   @Field()
//   id: string;

//   @Field()
//   name: string;
// }

// @Resolver(() => User)
// export class UserResolver {
//   constructor(private userService: UserService) {}

//   @Query(() => User)
//   async getUser(@Args('id') id: string): Promise<User> {
//     return this.userService.getUser(id);
//   }
// }
