import { gql } from "@apollo/client";

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
