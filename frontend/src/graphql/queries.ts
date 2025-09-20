import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser(id: "1") {
      id
      name
    }
  }
`;

export const GET_TASK = gql`
  query GetTask {
    getTask(taskId: "1") {
      taskId
      userId
      title
      description
      completed
    }
  }
`;