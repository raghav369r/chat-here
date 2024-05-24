import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import Chat from "./Chat";
import Status from "./Status";
import Profile from "./Profile";
import Settings from "./Settings";
import Hero from "./Hero";
import TopNavbar from "./TopNavBar";

const AllChats = () => {
  const [cat, setCat] = useState(0);
  const [chat, setChat] = useState(-1);
  const [menu, setMenu] = useState("");
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
    <div className="flex h-[100vh] select-none">
      <div className="relative flex flex-col w-1/2 min-w-[300px] max-w-[400px] h-full">
        {menu === "status" && <Status setMenu={setMenu} />}
        {menu === "profile" && <Profile setMenu={setMenu} />}
        {menu === "settings" && <Settings setMenu={setMenu} />}
        <TopNavbar menu={menu} setMenu={setMenu} />
        <div className="m-2 flex bg-bgprimary rounded-lg items-center px-2">
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
            <div
              key={ind}
              className={
                "border-t py-2 hover:bg-neutral-100 bg-opacity-75 " + (chat === ind ? "bg-bgprimary" : "")
              }
            >
              <div className="flex gap-4 items-center">
                <div className="w-16">
                  <div className="size-14 bg-neutral-300 rounded-full cursor-pointer flex justify-center items-center " >
                    <FaRegUser color="gray" className="size-8 opacity-50"/>
                  </div>
                </div>
                <div
                  className="p-1 cursor-pointer w-full"
                  onClick={() => {
                    setChat(ind);
                    setMenu("");
                  }}
                >
                  <h1 className="font-semibold text-neutral-600 ">{ele}</h1>
                  <p className="text-sm text-neutral-500">some message</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-bgprimary ">
        {chat !== -1 && <Chat ele={data[chat]} />}
        {chat == -1 && <Hero />}
      </div>
    </div>
  );
};

export default AllChats;