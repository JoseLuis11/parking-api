import ParkingLotRepository from '../core/repositories/ParkingLotRepository';
import ParkingLot from '../core/entities/ParkingLot';
import ParkingLotModel from './sequelize/ParkingLotModel';
import errors from '../core/interactors/constants/error';

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
      throw errors.ENTITY_NOT_FOUND('ParkingLot', id);
    } else {
      return foundParkingLot?.update({ spots: parkingLot.spots, contact: parkingLot.contact });
    }
  }

  async findOne(id: string): Promise<ParkingLot> {
    const foundParkingLot = await ParkingLotModel.findByPk(id);
    if (!foundParkingLot) {
      throw errors.ENTITY_NOT_FOUND('ParkingLot', id);
    } else {
      return foundParkingLot;
    }
  }

  async findByName(name:string): Promise<ParkingLot | null> {
    return await ParkingLotModel.findOne({ where: { name: name } });
  }

}

export default ParkingLotDataSource;
