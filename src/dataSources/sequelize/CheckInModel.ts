import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index';
import CheckInAttributes from '../../entities/CheckIn';
import ParkingLotModel from './ParkingLotModel';

type CheckInCreationAttributes = Optional<CheckInAttributes, 'id'>

type CheckInInstance =
  Model<CheckInAttributes, CheckInCreationAttributes>
  & CheckInAttributes;

const CheckInModel = sequelize.define<CheckInInstance>( 'CheckIn', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    parkingId: {
      type: DataTypes.INTEGER,
      references: {
        model: ParkingLotModel,
        key: 'id'
      },
      allowNull: false
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: 'check_in',
    charset: 'utf8'
  }
);

export default CheckInModel;
