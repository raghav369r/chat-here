import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { getJwt } from "../src/services/local";
import { BACKEND_URL_HTTP, BACKEND_URL_WS } from "../src/utils/constants";

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${BACKEND_URL_WS}/graphql`,
    // url: "wss://chat-app-backend-production-ee3b.up.railway.app/graphql", //railway
    // url: "wss://chat-app-backend-6yys.onrender.com/graphql", //render
    connectionParams: {
      Authorization: getJwt(),
    },
  })
);
const httpLink = createHttpLink({
  uri: `${BACKEND_URL_HTTP}/graphql`,
  // uri: "https://chat-app-backend-production-ee3b.up.railway.app/graphql",  //railway
  // uri: "https://chat-app-backend-6yys.onrender.com/graphql", //render
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
