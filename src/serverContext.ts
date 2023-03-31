import jwt from 'jsonwebtoken';
import { jwtSecret } from './security/secrets';
import { GraphQLError } from 'graphql/error';
import http from './core/interactors/constants/http';
import { IncomingMessage } from 'http';

const serverContext = async ({ req } : { req: IncomingMessage }) => {
  const token = req.headers.authorization?.replace('Bearer ', '') || '';
  jwt.verify(token, jwtSecret, (err) => {
    if (err) {
      throw new GraphQLError(err.message, {
        extensions: {
          code: err.name,
          http: { status: http.UNAUTHENTICATED },
        },
      })
    }
  });
  return {};
}

export default serverContext;
