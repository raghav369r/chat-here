// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hlo" element={<h1>hello</h1>} />
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
