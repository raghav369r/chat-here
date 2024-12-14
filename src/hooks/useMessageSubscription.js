import { useSubscription } from "@apollo/client";
import { SUB_MESSAGE } from "../../graphql/subscription";

const useMessageSubscription = (addNewMessage) => {
  const { loading, variables, data } = useSubscription(SUB_MESSAGE, {
    onData: ({ data }) => {
      const msg = data?.data?.messageAdded;
      console.log(msg);
      if (msg) addNewMessage(msg, true);
    },
  });
  return null;
};

export default useMessageSubscription;
