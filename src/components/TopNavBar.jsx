import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { TbCircleDashed } from "react-icons/tb";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import Menu from "./Menu";

import propTypes from "prop-types";
import { FaRegUser } from "react-icons/fa6";

const TopNavbar = ({ menu, setMenu, profileURL }) => {
  return (
    <div className="flex w-full justify-between items-center p-2 bg-bgprimary dark:bg-bghero">
      <div
        className="size-10 rounded-full bg-neutral-400 cursor-pointer flex-center"
        onClick={() => setMenu("profile")}
      >
        {profileURL ? (
          <img
            alt="profile"
            src={profileURL}
            className="h-full w-full object-cover rounded-full"
          />
        ) : (
          <FaRegUser color="gray" className="size-6 opacity-50" />
        )}
      </div>
      <div className="flex gap-5 items-center ">
        <IoIosPeople
          className="size-8 cursor-pointer"
          color="gray"
          onClick={() => setMenu("community")}
        />
        <TbCircleDashed
          className="size-7 cursor-pointer"
          color="gray"
          onClick={() => setMenu("status")}
        />
        <LuMessageSquarePlus
          className="size-6 cursor-pointer"
          color="gray"
          onClick={() => setMenu("newchat")}
        />
        <IoMdSettings
          className="size-6 cursor-pointer"
          color="gray"
          onClick={() => setMenu("settings")}
        />
        <div className="relative">
          <BsThreeDotsVertical
            className="size-6 cursor-pointer"
            color="gray"
            onClick={() => setMenu("menu")}
          />
          {menu === "menu" && <Menu setMenu={setMenu} />}
        </div>
      </div>
    </div>
  );
};

TopNavbar.propTypes = {
  menu: propTypes.string,
  setMenu: propTypes.func,
};
export default TopNavbar;
