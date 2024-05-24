import useGetCurrTheme from "../../hooks/useGetCurrTheme";
import { setLocalTheme } from "../../services/local";
import propTypes from "prop-types";

const Theme = () => {
  const [theme, setTheme] = useGetCurrTheme();
  return (
    <div className="z-10 absolute mr-2 cursor-pointer flex flex-col bottom-0 right-0 bg-white dark:bg-bghero shadow-black shadow-md">
      <Item setTheme={setTheme} theme={theme} name={"light"} />
      <Item setTheme={setTheme} theme={theme} name={"dark"} />
      <Item setTheme={setTheme} theme={theme} name={"system"} />
    </div>
  );
};

const Item = ({ name, setTheme, theme }) => {
  const handleSetTheme = () => {
    setLocalTheme(name);
    setTheme(name);
  };
  return (
    <div
      className={
        "p-3 border-b dark:border-gray-600 hover:bg-slate-100 dark:hover:bg-slate-700" +
        (theme === name ? " bg-slate-200 dark:bg-slate-600" : "")
      }
      onClick={handleSetTheme}
    >
      <p>{name}</p>
    </div>
  );
};

Item.propTypes = {
  name: propTypes.string,
  theme: propTypes.string,
  setTheme: propTypes.func,
};

export default Theme;
