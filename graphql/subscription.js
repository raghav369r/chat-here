import { gql } from "@apollo/client";

export const SUB_MESSAGE = gql`
  subscription Subscription {
    messageAdded {
      id
      message
      senderId
      receiverId
      createdAt
    }
  }
`;
export const SUB_TYPING = gql`
  subscription Typing {
    typing {
      istyping
      receiverId
      senderId
    }
  }
`;
