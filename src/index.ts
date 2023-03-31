import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import accessEnv from './utils/accessEnv';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: parseInt(accessEnv('LOCAL_PORT', '4000')) }
}).then(({ url }) =>
  console.log(`🚀  Server ready at: ${url}`)
)
