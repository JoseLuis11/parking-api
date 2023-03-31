import accessEnv from '../utils/accessEnv';

const jwtSecret = accessEnv('JWT_SECRET');

export { jwtSecret };
