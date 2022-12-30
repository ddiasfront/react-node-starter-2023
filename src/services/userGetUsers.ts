import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:3000/graphql", {
  headers: {},
});

export function useGetUsers() {
  return useQuery(
    "get-users",
    async () => {
      const { users } = await client.request(gql`
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
