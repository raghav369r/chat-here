import { gql } from "@apollo/client";

export const SUB_MESSAGE = gql`
  subscription Subscription($sender: ID, $receiver: ID) {
    msg: messageAdded(sender: $sender, receiver: $receiver) {
      id
      message
      senderId
      receiverId
      createdAt
    }
  }
`;
export const SUB_TYPING = gql`
  subscription Typing($sender: ID!, $receiver: ID!) {
    typing(sender: $sender, receiver: $receiver) {
      istyping
      receiverId
      senderId
    }
  }
`;
