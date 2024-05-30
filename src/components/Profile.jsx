import { IoMdArrowBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import propTypes from "prop-types";
import { FaRegUser } from "react-icons/fa6";
import { removeJwt } from "../services/local";
import { useContext } from "react";
import { UserContext } from "../context";

const Profile = ({ setMenu }) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full flex flex-col dark:text-white bg-white dark:bg-bgchat border-r border-gray-600">
      <div className="h-[18vh] bg-green-600 dark:bg-bghero flex p-5">
        <div
          className="flex gap-5 items-end cursor-pointer"
          onClick={() => setMenu("")}
        >
          <IoMdArrowBack className="size-7" color="white" />
          <h1 className="font-semibold text-white text-lg">Profile</h1>
        </div>
      </div>
      <div className="bg-bgprimary dark:bg-bgchat p-5 flex justify-center ">
        <div className="relative size-44 rounded-full bg-neutral-300 group cursor-pointer flex-center">
          <FaRegUser color="gray" className="size-28 opacity-45" />
          <div className="hidden absolute group-hover:flex flex-col justify-center items-center size-full">
            <FaCamera color="white" className="size-8" />
            <h1 className="text-center text-sm text-white">
              CHANGE PROFILE PHOTO
            </h1>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 shadow-lg">
        <h1 className="text-green-800 text-sm pb-2 ">Your name</h1>
        <div className="flex justify-between items-center">
          <h1>{user.name}</h1>
          <MdEdit className="size-5" color="gray" />
        </div>
      </div>
      <div className="p-5 bg-bgprimary dark:bg-bgchat">
        This is not your username or pin.This name is visible to your contacts.
      </div>
      <div className="px-5 py-3 shadow-md">
        <h1 className="text-green-800 text-sm pb-2">About</h1>
        <div className="flex justify-between items-center">
          <h1>No Guts No Glory</h1>
          <MdEdit className="size-5" color="gray" />
        </div>
      </div>
      <div
        onClick={() => {
          removeJwt();
          setUser(null);
        }}
        className="m-5 flex items-center gap-5 cursor-pointer font-semibold text-red-600"
      >
        <MdExitToApp className="size-6" />
        <h1>Log out</h1>
      </div>
    </div>
  );
};

Profile.propTypes = {
  setMenu: propTypes.func,
};

export default Profile;
