import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index';
import ParkingLotAttributes from '../../core/entities/ParkingLot';

type ParkingLotCreationAttributes = Optional<ParkingLotAttributes, 'id'>

type ParkingLotInstance =
  Model<ParkingLotAttributes, ParkingLotCreationAttributes>
  & ParkingLotAttributes;

const ParkingLotModel = sequelize.define<ParkingLotInstance>( 'ParkingLot', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  spots: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parkingType: {
    type: DataTypes.STRING,
    allowNull: false,
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
    tableName: 'parking_lot',
    charset: 'utf8'
  }
);

export default ParkingLotModel;
