import { useSubscription } from "@apollo/client";
import { SUB_TYPING } from "../../graphql/subscription";

const useGetIsTyping = (setUserTyping) => {
  const { data: sdata } = useSubscription(SUB_TYPING, {
    onData: ({ data }) => {
      const { istyping, senderId } = data?.data?.typing || {};
      setUserTyping(senderId, istyping);
      },
  });
};

export default useGetIsTyping;
