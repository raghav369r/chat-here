import { IoSearch } from "react-icons/io5";
import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import Chat from "./Chat";
import Status from "./Status";
import Profile from "./Profile";
import Settings from "./Settings";
import Hero from "./Hero";
import TopNavbar from "./TopNavBar";
import NewChat from "./NewChat";
import useGetAllInteractions from "../hooks/useGetAllInteractions";
import useMessageSubscription from "../hooks/useMessageSubscription";
import useGetIsTyping from "../hooks/useGetIsTyping";
import { UserContext } from "../context";

const AllChats = () => {
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState(0);
  const [chat, setChat] = useState(-1);
  const [menu, setMenu] = useState("");
  const { contacts, error, loading, setContacts, getIntraction } =
    useGetAllInteractions();

  const addNewMessage = async (msg, isReceived) => {
    if (!msg) return;
    var addedcontacts = contacts.map((contact) => ({
      ...contact,
      chat: [...contact.chat],
    }));
    var ind;
    if (isReceived) {
      ind = addedcontacts.findIndex((ele) => ele.contactId == msg.senderId);
      if (ind == -1) {
        const { data } = await getIntraction({
          variables: { id: msg.senderId },
        });
        if (data?.getIntraction) {
          addedcontacts.unshift({ ...data.getIntraction });
          addedcontacts[0].unReadMessages = 1;
        }
        setContacts(addedcontacts);
        return;
      } else {
        if (addedcontacts[ind]?.unReadMessages == null)
          addedcontacts[ind].unReadMessages = 1;
        else addedcontacts[ind].unReadMessages += 1;
      }
    } else
      ind = addedcontacts.findIndex((ele) => ele.contactId == msg.receiverId);
    addedcontacts[ind].chat.push(msg);
    setContacts(addedcontacts);
  };
  const getTime = (date) => {
    let dateObj = new Date(date);
    let timeWithoutSeconds = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeWithoutSeconds;
  };
  const setUserTyping = (senderId, istyping) => {
    const updated = [...contacts];
    const ind = updated.findIndex((ele) => ele.contactId == senderId);
    updated[ind].typing = istyping;
  };
  useMessageSubscription(addNewMessage);
  useGetIsTyping(setUserTyping);
  const category = ["All", "Unread", "Groups"];
  console.log("rendered");
  return (
    <div className="flex h-[100dvh] select-none bg-white dark:bg-bgchat">
      <div className="relative flex flex-col w-1/2 min-w-[300px] max-w-[400px] h-full">
        {menu === "status" && <Status setMenu={setMenu} />}
        {menu === "profile" && <Profile setMenu={setMenu} />}
        {menu === "settings" && <Settings setMenu={setMenu} />}
        {menu === "newchat" && (
          <NewChat
            setMenu={setMenu}
            contacts={contacts}
            setContacts={setContacts}
            setChat={setChat}
          />
        )}
        <TopNavbar menu={menu} setMenu={setMenu} profileURL={user.profileURL} />
        <div className="m-2 flex bg-bgprimary dark:bg-bghero rounded-lg items-center px-2">
          <IoSearch color="gray" className="ml-2" />
          <input
            className="w-full px-4 py-1 bg-bgprimary dark:text-white dark:bg-bghero outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-2 p-2">
          {category.map((ele, ind) => (
            <button
              className={
                "py-1 px-3 bg-bgprimary dark:bg-bghero rounded-full text-sm text-gray-600 " +
                (cat == ind ? "text-green-800 bg-green-500 bg-opacity-65" : "")
              }
              key={ind}
              onClick={() => setCat(ind)}
            >
              {ele}
            </button>
          ))}
        </div>
        <hr className="dark:border-gray-800" />
        <div className="px-2 flex flex-col h-full overflow-y-scroll">
          <div className="flex w-full py-2 dark:text-white">Archived</div>
          {error && <h1 className="text-red-700">Error getting data</h1>}
          {loading && <h1 className="text-center">loading...</h1>}
          {contacts?.map((ele, ind) => (
            <div
              key={ind}
              className={
                "relative border-t dark:border-gray-800 py-2 hover:bg-neutral-100 dark:hover:bg-bghero bg-opacity-75 " +
                (chat === ind ? "bg-bgprimary dark:bg-bghero" : "")
              }
            >
              <div className="text-xs absolute h-full right-3 top-0 flex flex-col items-center justify-center gap-1">
                <p className="text-gray-600">
                  {getTime(ele?.chat.at(-1)?.createdAt)}
                </p>
                {ele?.unReadMessages && (
                  <p className="flex items-center justify-center p-2 rounded-full size-6 bg-green-600 text-white font-semibold">
                    {ele.unReadMessages}
                  </p>
                )}
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-16">
                  <div className="size-14 bg-neutral-300 dark:bg-bghero rounded-full cursor-pointer flex-center ">
                    {ele?.user?.profileURL ? (
                      <img
                        alt="profile"
                        src={ele.user.profileURL}
                        className="h-full object-cover rounded-full"
                      />
                    ) : (
                      <FaRegUser color="gray" className="size-8 opacity-50" />
                    )}
                  </div>
                </div>
                <div
                  className="p-1 cursor-pointer w-full"
                  onClick={() => {
                    setChat(ind);
                  }}
                >
                  <h1 className="font-semibold text-neutral-600 dark:text-white">
                    {ele.user.firstName}
                  </h1>
                  <p className="text-sm text-neutral-500">
                    {ele?.chat.at(-1)?.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t dark:border-gray-800 w-full"></div>
        </div>
      </div>
      <div className="w-full h-full bg-bgprimary ">
        {chat !== -1 && (
          <Chat ele={contacts[chat]} addmessage={addNewMessage} />
        )}
        {chat == -1 && <Hero />}
      </div>
      <div className="absolute bottom-5 right-5"> </div>
    </div>
  );
};

export default AllChats;
