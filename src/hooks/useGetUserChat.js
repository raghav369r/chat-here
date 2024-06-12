import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { userMessages } from "../../graphql/quaries";
import { sendMessage } from "../../graphql/mutations";
import { SUB_MESSAGE } from "../../graphql/subscription";
import { UserContext } from "../context/index";

const useGetUserChat = ({ ele: user }) => {
  const { user: currUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const { data, loading, error, refetch } = useQuery(userMessages, {
    variables: { messagesByUserId: user.id },
    onCompleted: (data) => {
      if (data) {
        setMessages(data?.msgs);
      }
    },
  });

  const { data: subData } = useSubscription(SUB_MESSAGE, {
    variables: { sender: currUser?.id, receiver: user?.id },
    onData: ({ data: { data, error, loading } }) => {
      setMessages((prev) => [...prev, data.msg]);
    },
  });

  useEffect(() => {
    refetch({ messagesByUserId: user.id });
  }, [user.id, refetch]);

  const [sendmsg, { data: msgData, error: msgError, loading: msgLoading }] =
    useMutation(sendMessage, {
      onCompleted:async (data)=>{
        // const res=await refetch({ variables: { messagesByUserId: user.id } });
        // setMessages(res?.data.msgs);
      },
    });
  return [messages, setMessages, sendmsg];
};

export default useGetUserChat;
