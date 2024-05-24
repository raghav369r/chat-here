import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import Messages from "./Messages";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

const Chat = ({ ele }) => {
  const [data, setData] = useState([
    { r: "hi", time: "22:20" },
    { s: "hlo", time: "22:20" },
    { s: "How are u doing", time: "22:20" },
    { r: "fine what about u", time: "22:20" },
    { s: "all good", time: "22:20" },
    { r: "how is your preparation going for placements", time: "22:20" },
    { r: "any suggestions for learning AR&CS", time: "22:20" },
    { r: "hi", time: "22:20" },
    { s: "hlo", time: "22:20" },
    { s: "How are u doing", time: "22:20" },
    { r: "fine what about u", time: "22:20" },
    { s: "all good", time: "22:20" },
    { r: "how is your preparation going for placements", time: "22:20" },
    { r: "any suggestions for learning AR&CS", time: "22:20" },
  ]);

  const [msg, setMsg] = useState("");
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        if (msg) {
          setData((prev) => [...prev, { s: msg }]);
          setMsg("");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [msg]);

  const handleSend = () => {
    if (msg) {
      setData((prev) => [...prev, { s: msg }]);
      setMsg("");
    }
  };

  return (
    <div className="w-full flex flex-col h-[100vh] select-text">
      <div className="border-l border-neutral-300 flex justify-between bg-bgprimary p-2 h-fit items-center">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-neutral-300 flex justify-center items-center">
            <FaRegUser color="gray" className="size-6 opacity-50" />
          </div>
          <h1>{ele}</h1>
        </div>
        <div className="flex gap-5 px-4">
          <CiSearch className="size-6" />
          <BsThreeDotsVertical className="size-6" />
        </div>
      </div>
      <div className="h-full bg-neutral-100 overflow-y-scroll">
        <Messages data={data} />
      </div>
      <div className="flex w-full gap-4 p-2">
        <FaPlus className="size-10 p-2" color="gray" />
        <BsEmojiSmile className="size-10 p-2" color="gray" />
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="px-4 py-2 bg-white outline-none rounded-lg w-full"
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

Chat.propTypes = {
  ele: propTypes.string,
};

export default Chat;
