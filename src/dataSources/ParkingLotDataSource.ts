import ParkingLotRepository from '../repositories/ParkingLot.repository';
import ParkingLot from '../entities/ParkingLot';
import ParkingLotModel from './sequelize/ParkingLotModel';
import errors from '../interactors/constants/error';

class ParkingLotDataSource implements ParkingLotRepository {
  async create(parkingLot: ParkingLot): Promise<ParkingLot> {
    return await ParkingLotModel.create(parkingLot);
  }

  async findAll(options: object): Promise<ParkingLot[]> {
    return await ParkingLotModel.findAll(options);
  }

  async update(id: string, parkingLot: ParkingLot): Promise<ParkingLot> {
    const foundParkingLot = await ParkingLotModel.findByPk(id);
    if (!foundParkingLot) {
      throw new Error(errors.ENTITY_NOT_FOUND('ParkingLot', id));
    }
    return foundParkingLot?.update({ spots: parkingLot.spots, contact: parkingLot.contact });
  }

  async findOne(id: string): Promise<ParkingLot|null> {
    return await ParkingLotModel.findByPk(id);
  }

}

export default ParkingLotDataSource;
