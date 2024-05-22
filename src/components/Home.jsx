import { useEffect, useState } from "react";
import StartPage from "./StartPage";
import AllChats from "./AllChats";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  if (loading) return <StartPage />;
  return <AllChats />;
};

export default Home;
