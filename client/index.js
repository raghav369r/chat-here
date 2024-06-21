import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { getJwt } from "../src/services/local";
import { BACKEND_URL } from "../src/utils/constants";

const wsLink = new GraphQLWsLink(
  createClient({
    // url: "ws://localhost:3000/graphql",
    url: "wss://chat-app-backend-production-ee3b.up.railway.app/graphql",
    connectionParams: {
      Authorization: getJwt(),
    },
  })
);
const httpLink = createHttpLink({
  // uri: "http://localhost:3000/graphql",
  uri: "https://chat-app-backend-production-ee3b.up.railway.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
