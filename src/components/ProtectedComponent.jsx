import { useContext } from "react";
import { UserContext } from "../context";
import Login from "./shared/Login";

// eslint-disable-next-line react/prop-types
const ProtectedComponent = ({ Home }) => {
  const { user } = useContext(UserContext);
  if (user) return <Home />;
  return <Login />;
};

export default ProtectedComponent;
