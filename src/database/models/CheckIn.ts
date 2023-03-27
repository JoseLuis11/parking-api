import {
  Column, CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table, UpdatedAt
} from 'sequelize-typescript';
import UserTypeHelper from '../../enums/UserType/UserTypeHelper.js';
import { ParkingLot } from './ParkingLot.js';

@Table({ tableName: 'check_ins' })
export class CheckIn extends Model<CheckIn> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  @ForeignKey(() => ParkingLot)
  parkingId!: string;

  @Column({
    allowNull: false,
    type: DataType.ENUM( { values: UserTypeHelper.getTypes() })
  })
  userType!: string;

  @CreatedAt
  createdAt!: Date

  @UpdatedAt
  updatedAt!: Date

  @Column({
    allowNull: false,
    type: DataType.DATE
  })
  checkedInAt!: Date

  @Column({
    allowNull: true,
    type: DataType.DATE
  })
  checkedOutAt!: Date
}
