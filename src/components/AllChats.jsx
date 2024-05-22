import { CiMenuKebab } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";
import { BsChatDots } from "react-icons/bs";
import { TbNewSection } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Chat from "./Chat";

const AllChats = () => {
  const [cat, setCat] = useState(1);
  const [chat, setChat] = useState(-1);
  const data = [
    "Amma Nanna",
    "CSE_3F",
    "Akka",
    "Babai",
    "Ajju IIIT",
    "ABD Ben",
    "Virat Kohli",
    "Cam Green",
  ];
  const category = ["All", "Unread", "Groups"];
  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col w-1/2 min-w-[300px] max-w-[400px] h-full">
        <TopNavbar />
        <div className="m-2 flex bg-bgprimary rounded-xl items-center px-2">
          <IoSearch color="gray" className="ml-2" />
          <input
            className="w-full px-4 py-1 bg-bgprimary outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-2 p-2">
          {category.map((ele, ind) => (
            <button
              className={
                "py-1 px-3 bg-bgprimary rounded-full text-sm text-gray-600 " +
                (cat == ind ? "text-green-800 bg-green-500 bg-opacity-45" : "")
              }
              key={ind}
              onClick={() => setCat(ind)}
            >
              {ele}
            </button>
          ))}
        </div>
        <hr />
        <div className="px-2 flex flex-col h-full overflow-y-scroll">
          <div className="flex w-full py-2">Archived</div>
          {data.map((ele, ind) => (
            <div key={ind} className={"border-t py-2 "+(chat===ind?"bg-neutral-100":"")}>
              <div className="flex gap-4 items-center">
                <div className="w-16">
                  <div className="size-14 bg-neutral-300 rounded-full cursor-pointer" />
                </div>
                <div
                  className="p-1 cursor-pointer w-full"
                  onClick={() => setChat(ind)}
                >
                  <h1 className="font-semibold text-neutral-600 ">{ele}</h1>
                  <p className="text-sm text-neutral-500">some message</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-bgprimary">
        {chat !== -1 && <Chat ele={data[chat]} />}
      </div>
    </div>
  );
};

export default AllChats;

const TopNavbar = () => {
  return (
    <div className="flex w-full justify-between items-center p-2 bg-bgprimary ">
      <div className="size-10 rounded-full bg-neutral-400" />
      <div className="flex gap-5 items-center ">
        <IoIosPeople className="size-6" color="gray" />
        <CgMenuRound className="size-6" color="gray" />
        <BsChatDots className="size-6" color="gray" />
        <TbNewSection className="size-6" color="gray" />
        <CiMenuKebab className="size-6" color="gray" />
      </div>
    </div>
  );
};
