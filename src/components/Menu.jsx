import propTypes from "prop-types";

const Menu = ({ setMenu }) => {
  return (
    <div className="z-10 absolute top-full mt-1 min-w-[200px] right-0 rounded-md shadow-lg bg-white dark:bg-bghero dark:text-white">
      <ul className="flex flex-col items-start justify-center py-2">
        <Item name={"New group"} />
        <Item name={"New comunity"} />
        <Item name={"Starred messages"} />
        <Item name={"Select chats"} />
        <li
          className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary dark:hover:bg-bgchat"
          onClick={() => setMenu("settings")}
        >
          Settings
        </li>
        <a
          href="/"
          className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary dark:hover:bg-bgchat"
        >
          Logout
        </a>
      </ul>
    </div>
  );
};

const Item = ({ name }) => {
  return (
    <li className="cursor-pointer px-5 py-2 w-full hover:bg-bgprimary dark:hover:bg-bgchat">
      {name}
    </li>
  );
};

Menu.propTypes = {
  setMenu: propTypes.func,
};

export default Menu;
