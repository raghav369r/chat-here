import { gql } from "@apollo/client";

export const signInUser = gql`
  query SignInUser($user: signIn) {
    data: signInUser(user: $user) {
      token
    }
  }
`;
export const getUser = gql`
  query Query($getUserId: ID!) {
    getUser(id: $getUserId) {
      id
      firstName
      lastName
      email
      createdAt
      about
      profileURL
    }
  }
`;

export const getAllUsers = gql`
  query GetAllUsers {
    users: getAllUsers {
      id
      firstName
      lastName
      email
      createdAt
    }
  }
`;

export const userMessages = gql`
  query MessagesByUser($messagesByUserId: ID!) {
    msgs: messagesByUser(id: $messagesByUserId) {
      id
      message
      senderId
      receiverId
      createdAt
    }
  }
`;
