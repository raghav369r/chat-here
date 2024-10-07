import React from "react";
import { IoMdClose } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { MdBlock } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiFillDislike } from "react-icons/ai";

const ContactInfo = ({ handleClose, user }) => {
  return (
    <div className="flex flex-col h-full dark:text-white">
      <div className="flex p-4 gap-5 h-fit">
        <IoMdClose className="size-7" color="gray" onClick={handleClose} />
        <h1 className="text-lg text-gray-500 overflow-x-hidden">
          Contact info
        </h1>
      </div>
      <div className="h-full overflow-y-scroll">
        <div className="h-full flex flex-col gap-4">
          <div className="flex-center flex-col w-full p-4 bg-white dark:bg-bgchat shadow-lg">
            <div className="size-52 rounded-full bg-neutral-300 flex-center">
              {user.profileURL ? (
                <img
                  alt="profile"
                  src={user.profileURL}
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <RxAvatar className="size-44" color="gray" />
              )}
            </div>
            <h1 className="text-lg">{user.firstName + " " + user.lastName}</h1>
            <p>{user.email}</p>
          </div>
          <div className="p-5 bg-white dark:bg-bgchat shadow-lg">
            <h1 className="text-gray-700">About</h1>
            <p className="my-2 text-lg">{user.about}</p>
          </div>
          <div className="p-5 bg-white dark:bg-bgchat shadow-lg">
            <h1 className="text-gray-700">Media</h1>
          </div>
          <div className="p-5 bg-white dark:bg-bgchat shadow-lg text-red-600 font-semibold text-lg">
            <div className="flex items-center gap-6">
              <MdBlock className="size-6" color="red" />
              <h1 className="p-2">Block </h1>
            </div>
            <div className="flex items-center gap-6">
              <MdOutlineDeleteForever className="size-6" color="red" />
              <h1 className="p-2">Delete</h1>
            </div>
            <div className="flex items-center gap-6">
              <AiFillDislike className="size-6" color="red" />
              <h1 className="p-2">Report</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
