// schema-first
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
    }),
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}


// code-first
// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     GraphQLModule.forRoot({
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
//     }),
//     UserModule,
//   ],
// })
// export class AppModule {}
