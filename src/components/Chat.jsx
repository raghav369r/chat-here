import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import Messages from "./Messages";
import { useEffect, useState } from "react";
import useGetUserChat from "../hooks/useGetUserChat";
import useGetIsTyping from "../hooks/useGetIsTyping";
import { MAX_SIZE } from "../utils/constants";

const Chat = ({ ele }) => {
  const [messages, setMessages, sendmsg] = useGetUserChat({ ele });
  const [isTyping, setIamTyping] = useGetIsTyping({ ele });
  const [msg, setMsg] = useState("");
  const [size, setSize] = useState(0);
  const [iamtyping, setIamtyping] = useState(false);
  const handleSend = async () => {
    if (!msg) return;
    const res = await sendmsg({
      variables: { newMsg: { message: msg, receiverId: ele.id } },
    });
    // console.log("res: ", res);
    setMsg("");
    setSize(0);
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
  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 190) return;
    setSize(value.length);
    setMsg(value);
    if (value != "" && iamtyping != true) {
      setIamtyping(true);
      setIamTyping({ variables: { receiverId: ele.id, istyping: true } });
    }
    if (value == "" && iamtyping) {
      setIamtyping(false);
      setIamTyping({ variables: { receiverId: ele.id, istyping: false } });
    }
  };

  return (
    <div className="w-full flex flex-col h-[100vh] select-text">
      <div className="flex justify-between bg-bgprimary dark:bg-bghero dark:text-white p-2 h-fit items-center">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-neutral-300 flex-center">
            <FaRegUser color="gray" className="size-6 opacity-50" />
          </div>
          <div>
            <h1>{ele.firstName}</h1>
            {isTyping && <h1 className="text-xs">typing...</h1>}
          </div>
        </div>
        <div className="flex gap-5 px-4">
          <CiSearch className="size-6" />
          <BsThreeDotsVertical className="size-6" />
        </div>
      </div>
      <div className="h-full bg-neutral-100 dark:bg-bgdarkgreen overflow-y-scroll">
        <Messages data={messages} />
      </div>
      <div className="flex w-full gap-2 p-2 dark:bg-bghero items-center">
        <FaPlus className="size-10 p-2" color="gray" />
        <BsEmojiSmile className="size-10 p-2" color="gray" />
        {size ? (
          <h1 className="text-xs dark:text-white text-black size-10">
            {size} / {MAX_SIZE}
          </h1>
        ) : (
          ""
        )}
        <input
          value={msg}
          onChange={handleChange}
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
