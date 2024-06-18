import { useMutation, useSubscription } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { typing } from "../../graphql/mutations";
import { UserContext } from "../context";
import { SUB_TYPING } from "../../graphql/subscription";

const useGetIsTyping = ({ ele }) => {
  // console.log(ele);
  const { user } = useContext(UserContext);
  const [isTyping, setIstyping] = useState(false);

  const [setIamTyping, { error, data, loading }] = useMutation(typing, {
    // onCompleted: (data) => console.log(data),
  });

  const { data: sdata } = useSubscription(SUB_TYPING, {
    variables: { sender: ele.id, receiver: user.id },
    onData: ({ data }) => {
      data?.data?.typing.istyping ? setIstyping(true) : setIstyping(false);
    //   console.log(data?.data?.typing.istyping);
    },
  });

  return [isTyping, setIamTyping];
};

export default useGetIsTyping;
