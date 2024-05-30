// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import useSetTheme from "./hooks/useSetTheme";
import Calender from "./components/shared/Calender";

const App = () => {
  useSetTheme();
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cal" element={<Calender />} />
        <Route path="/load" element={<Loader />} />
      </Routes>
    </div>
  );
};

export default App;

// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   const id = setTimeout(() => setLoading(true), 2000);
//   return () => {
//     clearTimeout(id);
//   };
// }, []);
// if (loading) return <StartPage />;
