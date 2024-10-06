// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import useSetTheme from "./hooks/useSetTheme";
import Calender from "./components/shared/Calender";
import { UserContext } from "./context";
import ProtectedComponent from "./components/ProtectedComponent";
import useGetUser from "./hooks/useGetUser";
import StartPage from "./components/StartPage";
import PhotoUpload from "./components/PhotoUpload";

const App = () => {
  useSetTheme();
  const [user, setUser, loading] = useGetUser();
  if (loading) return <StartPage />;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="">
        <Routes>
          <Route path="/" element={<ProtectedComponent Home={Home} />} />
          <Route path="/cal" element={<Calender />} />
          <Route path="/load" element={<Loader />} />
          <Route path="/test" element={<PhotoUpload/>}/>
        </Routes>
      </div>
    </UserContext.Provider>
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

// import { useQuery } from "@apollo/client";
// import { userMessages } from "../graphql/quaries";
// import { VscLoading } from "react-icons/vsc";
// const { data, loading, error } = useQuery(userMessages, {
//   variables: { messagesByUserId: 1 },
// });
// if (loading) return <VscLoading className="size-20" />;
// if (error) return <h1>Error occureed!!</h1>;
// console.log(data);
