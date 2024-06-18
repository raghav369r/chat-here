import { useQuery } from "@apollo/client";
import { getAllUsers } from "../../graphql/quaries";

const useGetAllInteractions = () => {
  // const { data: contacts, error, loading } = useQuery(getAlluNg);

    const { data: contacts, error, loading } = useQuery(getAllUsers);
  //   const { data: groups, error: _, loading: __ } = useQuery(getAllGroups);
  return { contacts };
};

export default useGetAllInteractions;
