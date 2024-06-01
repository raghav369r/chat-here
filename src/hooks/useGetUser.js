import { useEffect, useState } from "react";
import { decodeToken, getJwt } from "../services/local";
import { useLazyQuery } from "@apollo/client";
import { getUser } from "../../graphql/quaries";

const useGetUser = () => {
  const [user, setUser] = useState(null);
  const [getuser] = useLazyQuery(getUser, {
    onCompleted: (data) => setUser({ ...data.getUser }),
  });
  useEffect(() => {
    const start = async () => {
      const token = getJwt();
      var decoded = null;
      try {
        const { id } = await decodeToken(token);
        if (id) getuser({ variables: { getUserId: id } });
      } catch (ex) {
        console.log(ex);
      }
    };
    start();
  }, []);
  return [user, setUser];
};

export default useGetUser;
