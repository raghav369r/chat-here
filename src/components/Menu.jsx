import propTypes from "prop-types";
import { useEffect, useRef } from "react";

const Menu = ({ setMenu }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      menuRef.current &&
        !menuRef.current.contains(event?.target) &&
        setMenu("");
    };
    const id = setTimeout(
      () => window.addEventListener("click", handleClick),
      [100]
    );

    return () => {
      window.removeEventListener("click", handleClick);
      clearTimeout(id);
    };
  }, [setMenu]);

  return (
    <div
      ref={menuRef}
      className="z-10 absolute top-full mt-1 min-w-[200px] right-0 rounded-md shadow-lg bg-white dark:bg-bghero dark:text-white"
    >
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

Item.propTypes = {
  name: propTypes.string,
};
export default Menu;
