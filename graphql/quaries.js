import { gql } from "@apollo/client";

export const getNewInteraction = gql`
  query GetIntraction($id: ID!) {
    getIntraction(id: $id) {
      userId
      isGroup
      contactId
      lastInteracted
      lastReadMessage
      unReadMessages
      typing
      user {
        id
        id
        firstName
        lastName
        email
        createdAt
        about
        profileURL
        firstName
        lastName
        email
        createdAt
        about
        profileURL
      }
      chat {
        id
        message
        senderId
        receiverId
        createdAt
      }
    }
  }
`;

export const signInUser = gql`
  query SignInUser($user: signIn) {
    data: signInUser(user: $user) {
      token
    }
  }
`;

export const searchUsers = gql`
  query SearchUsers($userName: String!) {
    emails: searchUsers(userName: $userName) {
      email
      id
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
  query GetAllInteractions {
    users: getAllInteractions {
      isGroup
      contactId
      lastInteracted
      lastReadMessage
      unReadMessages
      lastReadMessage
      typing
      user {
        id
        firstName
        lastName
        email
        createdAt
        about
        profileURL
      }
      chat {
        id
        message
        senderId
        receiverId
        createdAt
      }
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
