import ParkingLotRepository from '../repositories/ParkingLot.repository';
import ParkingLot from '../entities/ParkingLot';
import ParkingLotModel from './sequelize/ParkingLotModel';

class ParkingLotDataSource implements ParkingLotRepository {
  async create(item: ParkingLot): Promise<ParkingLot> {
    return await ParkingLotModel.create(item);
  }

  async findAll(): Promise<ParkingLot[]> {
    return await ParkingLotModel.findAll( { limit: 5 } );
  }

  async findOne(id: string): Promise<ParkingLot|null> {
    return await ParkingLotModel.findByPk(id);
  }

  update(id: string, item: ParkingLot): Promise<boolean> {
    return Promise.resolve(false);
  }

}

export default ParkingLotDataSource;
