import { useLazyQuery, useQuery } from "@apollo/client";
import { getAllUsers } from "../../graphql/quaries";
import { useEffect, useState } from "react";

const useGetAllInteractions = () => {
  const [contacts, setContacts] = useState([]);
  const [getUsers, { data, error, loading }] = useLazyQuery(getAllUsers, {
    onCompleted: ({ users }) => {
      console.log("re-fetched users");
      setContacts(users);
    },
  });
  useEffect(() => {
    getUsers();
  }, []);
  // console.log(contacts);
  return { contacts, error, loading, setContacts };
};

export default useGetAllInteractions;
