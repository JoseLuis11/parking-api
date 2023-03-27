import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table
} from 'sequelize-typescript';
import ParkingTypeHelper from '../../enums/ParkingType/ParkingTypeHelper.js';

@Table({ tableName: 'parking_lots' })
export class ParkingLot extends Model<ParkingLot> {
  @Column(DataType.STRING)
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  spots!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  availableSpots!: number;

  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  contact!: string;

  @Column({
    allowNull: false,
    type: DataType.ENUM({ values: ParkingTypeHelper.getTypes() })
  })
  parkingType!: string;

  @CreatedAt
  createdAt!: Date;
}
