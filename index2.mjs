// Creating the server
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.mjs";
import { Query } from "./resolvers/Query.mjs";
import { Mutation } from "./resolvers/Mutation.mjs";
import { Category } from "./resolvers/Category.mjs";
import { Product } from "./resolvers/Product.mjs";
import { db } from "./db.mjs";

// Initialize the Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db,
  },
});

//Run and Checking the server
server.listen({ port: 3001 }).then(({ url }) => {
  console.log("Server is ready at " + url);
});
