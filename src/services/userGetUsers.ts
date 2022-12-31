import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { clientInstance } from "../App";

export function useGetUsers() {
  return useQuery(
    "get-users",
    async () => {
      const { users } = await clientInstance.request(gql`
        query Users {
          users {
            name
            email
          }
        }
      `);
      return users;
    },
    {
      staleTime: 200000,
    }
  );
}
