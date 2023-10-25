// Creating the server
import { ApolloServer, gql } from "apollo-server";

// Schema
const typeDefs = gql`
  type Query {
    hello: [String!]
  }
`;

// Resolver
const resolvers = {
  Query: {
    hello: () => {
      return ["GoodMorning", "GoodAfternoon", "GoodEvening"];
    },
  },
};

// Initialize the Server
const server = new ApolloServer({ typeDefs, resolvers });

// Checking the server
server.listen({ port: 3000 }).then(({ url }) => {
  console.log("Server is ready at " + url);
});
