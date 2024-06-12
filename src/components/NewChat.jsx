import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";

const NewChat = ({ setMenu }) => {
  const [name, setName] = useState({ name: "", error: "" });
  const [group, setGroup] = useState({ name: "", error: "" });
  const handleNewGroup = () => {
    console.log(group.name);
  };
  const handleNewChat = () => {
    console.log(name.name+"@gmail.com");
  };
  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-white dark:bg-bgchat flex flex-col dark:text-white">
      <div className="h-[18vh] bg-green-600 dark:bg-bghero flex p-5">
        <div
          className="flex gap-5 items-end cursor-pointer"
          onClick={() => setMenu("")}
        >
          <IoMdArrowBack className="size-7" color="white" />
          <h1 className="font-semibold text-white text-lg">New Chat</h1>
        </div>
      </div>
      <div className="flex p-3 my-4 items-center gap-4 dark:hover:bg-bghero hover:bg-bgprimary">
        <div className="size-12 rounded-full bg-green-500 flex justify-center items-center  ">
          <FaUserGroup color="white" className="size-8" />
        </div>
        <h1 className="text-lg dark:text-white">New Group</h1>
      </div>
      <div className="p-2 mb-2">
        <h1 className="text-green-600 text-lg mb-4">Add new member by email</h1>
        <div className="flex bg-bgprimary dark:bg-bghero w-full rounded-lg">
          <input
            className="appearance-none bg-bgprimary dark:bg-bghero rounded-l-lg outline-none p-2 w-full"
            type="text"
            value={name.name}
            onChange={(e) =>
              setName((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label className="p-2 w-fit">@gmail.com</label>
        </div>
        <button className="bg-green-500 py-2 px-4 my-2 hover:translate-y-2" onClick={handleNewChat}>
          Start Chat
        </button>
      </div>
      <div className="p-2 mb-2">
        <h1 className="text-green-600 text-lg mb-4">Join Group by ID</h1>
        <input
          className="appearance-none bg-bgprimary dark:bg-bghero rounded-lg outline-none p-2 w-full "
          type="text"
          value={group.name}
          onChange={(e) =>
            setGroup((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <button
          className="bg-green-500 py-2 px-4 my-2 hover:translate-y-2"
          onClick={handleNewGroup}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default NewChat;
