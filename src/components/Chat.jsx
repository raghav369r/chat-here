import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";

const Chat = ({ ele }) => {
  return (
    <div className="w-full flex flex-col h-[100vh]">
      <div className="border-l border-neutral-300 flex justify-between bg-bgprimary p-2 h-fit items-center">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-neutral-300" />
          <h1>{ele}</h1>
        </div>
        <div className="flex gap-5 px-4">
          <CiSearch className="size-6" />
          <BsThreeDotsVertical className="size-6" />
        </div>
      </div>
      <div className="h-full bg-neutral-100"></div>
      <div className="flex w-full gap-4 p-2">
        <FaPlus className="size-10 p-2" color="gray" />
        <BsEmojiSmile className="size-10 p-2" color="gray" />
        <input
          className="px-4 py-2 bg-white outline-none rounded-lg w-full"
          placeholder="Enter your message"
        />
        <IoMdSend className="size-10 p-1" color="gray" />
      </div>
    </div>
  );
};

export default Chat;
