import './dotEnvInit';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './transportLayer/graphql/schema';
import resolvers from './transportLayer/graphql/resolvers';
import accessEnv from './utils/accessEnv';
import serverContext from './serverContext';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: parseInt(accessEnv('LOCAL_PORT', '4000')), },
  context: serverContext
}).then(({ url }) =>
  console.log(`🚀  Server ready at: ${url}`)
)
