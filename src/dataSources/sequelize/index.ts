import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import accessEnv from '../../utils/accessEnv';

dotenv.config();
const DB_URL: string = accessEnv('DB_URL');
const sequelize = new Sequelize(DB_URL, {
  logging: false
});

sequelize.sync();

export default sequelize;
