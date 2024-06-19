import React, { useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { useLazyQuery, useMutation } from "@apollo/client";
import { searchUsers } from "../../graphql/quaries";
import { addNewInteraction } from "../../graphql/mutations";

const NewChat = ({ setMenu, setContacts, setChat, contacts }) => {
  const [name, setName] = useState({ name: "", error: "", id: "" });
  const [group, setGroup] = useState({ name: "", error: "" });
  const [showUsers, setShowUsers] = useState(false);
  const [searchUser, { data, loading, error }] = useLazyQuery(searchUsers);
  const [newInteraction, {}] = useMutation(addNewInteraction);
  const nameRef = useRef(null);
  const handleNewGroup = () => {
    console.log(group.name);
  };
  const handleNewChat = async () => {
    console.log(name.name + "@gmail.com " + "id ", name.id);
    if (!name.id) return;
    const ind = contacts?.findIndex((ele) => ele.contactId == name.id);
    if (ind != -1) setChat(ind);
    else {
      const res = await newInteraction({
        variables: { newInt: { contactId: name.id, isGroup: false } },
      });
      if (res?.data?.newInt) {
        setContacts([res.data.newInt, ...contacts]);
        setChat(0);
        setMenu("");
      }
    }
  };
  const handleNameChange = (e) => {
    if (e.target.value == "") {
      setName((prev) => ({ ...prev, name: e.target.value }));
      setShowUsers(false);
      return;
    }
    setShowUsers(true);
    setName((prev) => ({ ...prev, name: e.target.value }));
    searchUser({ variables: { userName: e.target.value } });
  };
  const handleNameSelect = (details) => {
    const name = details.email.split("@")[0];
    const id = details.id;
    setName((prev) => ({ ...prev, name: name, id }));
    setShowUsers(false);
  };
  return (
    <div
      id="new-chat"
      className="z-10 absolute top-0 left-0 w-full h-full bg-white dark:bg-bgchat flex flex-col dark:text-white"
    >
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
        <div className="relative flex bg-bgprimary dark:bg-bghero w-full rounded-lg">
          <input
            ref={nameRef}
            className="appearance-none bg-bgprimary dark:bg-bghero rounded-l-lg outline-none p-2 w-full "
            type="text"
            value={name.name}
            placeholder="Enter User Email"
            onChange={handleNameChange}
          />
          <label className="p-2 w-fit">@gmail.com</label>
          {data && showUsers && (
            <div className="absolute top-full translate-y-1 left-0 w-full z-10 bg-neutral-200 bg-opacity-70 dark:bg-bghero">
              {data?.emails?.map((name, ind) => (
                <h1
                  key={ind}
                  className="p-2 dark:hover:bg-bgchat cursor-pointer hover:bg-neutral-300"
                  onClick={() => handleNameSelect(name)}
                >
                  {name.email}
                </h1>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-green-500 py-2 px-4 my-2 hover:translate-x-2 rounded-lg"
          onClick={handleNewChat}
        >
          Start Chat
        </button>
      </div>
      <div className="p-2 mb-2">
        <h1 className="text-green-600 text-lg mb-4">Join Group by ID</h1>
        <input
          className="appearance-none bg-bgprimary dark:bg-bghero rounded-lg outline-none p-2 w-full "
          type="text"
          value={group.name}
          placeholder="Enter Room ID"
          onChange={(e) =>
            setGroup((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <button
          className="bg-green-500 py-2 px-4 my-2 hover:translate-x-2 rounded-lg"
          onClick={handleNewGroup}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default NewChat;
