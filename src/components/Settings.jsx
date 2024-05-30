import { IoMdArrowBack } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCamera, FaRegUser } from "react-icons/fa6";
import propTypes from "prop-types";
import Theme from "./shared/Theme";
import { useState } from "react";

const Settings = ({ setMenu }) => {
  const [theme, setTheme] = useState(false);
  return (
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-white dark:bg-bgchat flex flex-col ">
      <div className="h-[18vh] bg-green-600 dark:bg-bghero flex p-5">
        <div
          className="flex gap-5 items-end cursor-pointer"
          onClick={() => setMenu("")}
        >
          <IoMdArrowBack className="size-7" color="white" />
          <h1 className="font-semibold text-white text-lg">Settings</h1>
        </div>
      </div>
      <div className="h-full  overflow-y-scroll">
        <div className="m-2 flex bg-bgprimary dark:bg-bghero rounded-lg items-center px-2">
          <IoSearch color="gray" className="ml-2" />
          <input
            className="w-full px-4 py-1 bg-bgprimary dark:bg-bghero dark:text-white outline-none"
            placeholder="Search Settings"
          />
        </div>
        <div className="flex items-center p-3 gap-4">
          <div className="relative group size-24 bg-neutral-300 rounded-full flex-center cursor-pointer">
            <FaRegUser color="gray" className="size-16 opacity-45" />
            <FaCamera
              color="white"
              className="size-6 hidden absolute group-hover:flex flex-col justify-center items-center"
            />
          </div>
          <div className="text-sm text-gray-600">
            <h1>Raghav</h1>
            <p>No guts No glory</p>
          </div>
        </div>
        <ul className="dark:text-white">
          <Item name={"Account"} />
          <Item name={"Privacy"} />
          <Item name={"Chats"} />
          <Item name={"Notifications"} />
          <Item name={"Keyboard Shortcuts"} />
          <Item name={"help"} />
          <li
            className="flex gap-5 w-full px-8 py-3 hover:bg-neutral-200 border-b dark:border-gray-700 relative dark:hover:bg-bghero"
            onMouseEnter={() => setTheme(true)}
            onMouseLeave={() => setTheme(false)}
          >
            <p className="w-full">Theme</p>
            {theme && <Theme />}
          </li>
        </ul>
        <a
          href="/"
          className="m-5 flex items-center gap-5 cursor-pointer font-semibold text-red-600"
        >
          <MdExitToApp className="size-6" />
          <h1>Log out</h1>
        </a>
      </div>
    </div>
  );
};

const Item = ({ name }) => {
  return (
    <li className="flex gap-5 w-full px-8 py-3 hover:bg-neutral-200 dark:hover:bg-bghero border-b dark:border-gray-700">
      <p>{name}</p>
    </li>
  );
};

Item.propTypes = {
  name: propTypes.string,
};

Settings.propTypes = {
  setMenu: propTypes.func,
};

export default Settings;
