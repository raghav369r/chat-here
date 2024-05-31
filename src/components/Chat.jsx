import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import Messages from "./Messages";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { userMessages } from "../../graphql/quaries";
import { sendMessage } from "../../graphql/mutations";
import { SUB_MESSAGE } from "../../graphql/subscription";

const Chat = ({ ele }) => {
  const { data, loading, error, refetch } = useQuery(userMessages, {
    variables: { messagesByUserId: ele.id },
  });
  const [sendmsg, { data: msgData, error: msgError, loading: msgLoading }] =
    useMutation(sendMessage, {
      onCompleted(data) {
        // console.log("sent");
        // refetch({ messagesByUserId: ele.id });
      },
    });
  const { data: subData } = useSubscription(SUB_MESSAGE, {
    onData: (data) => refetch({ messagesByUserId: ele.id }),
  });

  const [msg, setMsg] = useState("");
  const handleSend = async () => {
    if (!msg) return;
    const res = await sendmsg({
      variables: { newMsg: { message: msg, receiverId: ele.id } },
    });
    // console.log("res: ", res);
    setMsg("");
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        if (msg) {
          handleSend();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSend]);

  return (
    <div className="w-full flex flex-col h-[100vh] select-text">
      <div className="flex justify-between bg-bgprimary dark:bg-bghero dark:text-white p-2 h-fit items-center">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-neutral-300 flex-center">
            <FaRegUser color="gray" className="size-6 opacity-50" />
          </div>
          <h1>{ele.firstName}</h1>
        </div>
        <div className="flex gap-5 px-4">
          <CiSearch className="size-6" />
          <BsThreeDotsVertical className="size-6" />
        </div>
      </div>
      <div className="h-full bg-neutral-100 dark:bg-bgdarkgreen overflow-y-scroll">
        <Messages data={data?.msgs} />
      </div>
      <div className="flex w-full gap-4 p-2 dark:bg-bghero">
        <FaPlus className="size-10 p-2" color="gray" />
        <BsEmojiSmile className="size-10 p-2" color="gray" />
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="px-4 py-2 bg-white dark:bg-gray-600 dark:text-white outline-none rounded-lg w-full"
          placeholder="Enter your message"
        />
        <IoMdSend
          className="size-10 p-1"
          color={msg ? "green" : "gray"}
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default Chat;
