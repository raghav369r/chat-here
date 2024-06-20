import { useSubscription } from "@apollo/client";
import { SUB_MESSAGE } from "../../graphql/subscription";

const useMessageSubscription = (addNewMessage) => {
  const { loading, variables, data } = useSubscription(SUB_MESSAGE, {
    onData: ({ data }) => {
      console.log("received: ", data);
      const msg = data?.data?.messageAdded;
      if (msg) addNewMessage(msg, true);
    },
  });
  return null;
};

export default useMessageSubscription;
