import { useEffect, useState } from "react";
import { decodeToken, getJwt } from "../services/local";

const useGetUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const start = async () => {
      const token = getJwt();
      var decoded = null;
      try {
        decoded = await decodeToken(token);
      } catch (ex) {
        console.log(ex);
      }
      setUser(decoded);
    };
    start();
  }, []);
  return [user, setUser];
};

export default useGetUser;
