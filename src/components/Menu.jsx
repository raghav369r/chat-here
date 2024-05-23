const Menu = ({ setMenu }) => {
  return (
    <div className="z-10 absolute top-full mt-1 min-w-[200px] right-0  bg-white rounded-md shadow-lg">
      <ul className="flex flex-col items-start justify-center py-2">
        <li className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary">
          New group
        </li>
        <li className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary">
          New comunity
        </li>
        <li className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary">
          Starred messages
        </li>
        <li className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary">
          Select chats
        </li>
        <li
          className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary"
          onClick={() => setMenu("settings")}
        >
          Settings
        </li>
        <li className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Menu;
