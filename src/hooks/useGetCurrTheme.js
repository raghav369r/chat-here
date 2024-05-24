import { useEffect, useState } from "react";
import { currentTheme } from "../services/local";

const useGetCurrTheme = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(currentTheme());
  }, []);
  return [theme, setTheme];
};

export default useGetCurrTheme;
