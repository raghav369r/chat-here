import { gql } from "@apollo/client";

export const typing = gql`
  mutation Mutation($receiverId: ID!, $istyping: Boolean!) {
    isTyping(receiverId: $receiverId, istyping: $istyping)
  }
`;

export const registerUser = gql`
  mutation Mutation($newUser: NewUser!) {
    data: registerUser(newUser: $newUser) {
      token
    }
  }
`;
export const updateAbout = gql`
  mutation Mutation($about: String) {
    updateAbout(about: $about) {
      about
    }
  }
`;
export const updateProfile = gql`
  mutation UpdateNameNAbout($name: String, $about: String) {
    updateNameNAbout(name: $name, about: $about) {
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
export const updateName = gql`
  mutation Mutation($name: String) {
    updateName(name: $name) {
      name
    }
  }
`;

export const sendMessage = gql`
  mutation Mutation($newMsg: newMessage!) {
    sendMessage(newMsg: $newMsg) {
      id
      message
      senderId
      receiverId
      createdAt
    }
  }
`;
export const addNewInteraction = gql`
  mutation AddInteraction($newInt: interactionInput!) {
    newInt: addInteraction(newInt: $newInt) {
      userId
      isGroup
      contactId
      lastInteracted
      lastReadMessage
      unReadMessages
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
