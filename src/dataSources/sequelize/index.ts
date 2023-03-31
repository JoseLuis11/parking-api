import { Sequelize } from 'sequelize';
import accessEnv from '../../utils/accessEnv';

const DB_URL: string = accessEnv('DB_URL');
const sequelize = new Sequelize(DB_URL, {
  logging: false
});

sequelize.sync();

export default sequelize;
