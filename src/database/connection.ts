import { Sequelize } from 'sequelize-typescript';
import accessEnv from './helpers/accessEnv.js';
import models from './models/models.js';
import dotenv from 'dotenv';

//allows to use .env
dotenv.config();

const DB_URL: string = accessEnv('DB_URL');

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true
  },
  logging: false,
  models
});


export default sequelize;
