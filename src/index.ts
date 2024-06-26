import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./schemas/schema";
import resolvers from "./resolvers/resolver";


import musicTypeDefs from "./schemas/musicSchema";
import musicResolvers from "./resolvers/musicResolver";

const server = new ApolloServer({
  typeDefs: musicTypeDefs,
  resolvers: musicResolvers,
});

(async () => {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Server is running at ${url}`);
  } catch (err) {
    console.log("Failed to start server:", err);
  }
})();

console.log("Server ready at port", 4000);
