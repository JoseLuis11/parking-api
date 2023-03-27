import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers/resolvers.js';
import accessEnv from './database/helpers/accessEnv.js';
import './database/connection.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: parseInt(accessEnv('LOCAL_PORT', '4000')) },
});

console.log(`🚀  Server ready at: ${url}`);
