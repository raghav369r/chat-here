import { useEffect } from "react";
import { getTheme } from "../services/local";

const useSetTheme = () => {
  useEffect(() => {
    const dark =
      getTheme() == "dark" ||
      (!getTheme() &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.getElementById("body").classList.add("dark");
  }, []);
  return null;
};

export default useSetTheme;
