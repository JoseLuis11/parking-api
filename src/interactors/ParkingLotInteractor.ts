import ParkingLotRepository from '../repositories/ParkingLot.repository';
import ParkingLot from '../entities/ParkingLot';
import ParkingType from '../enums/ParkingType';
import InvalidTypeError from './error/InvalidTypeError';

class ParkingLotInteractor {
  constructor(private parkingLotRepository: ParkingLotRepository) {}

  public async create(parkingLot: ParkingLot): Promise<ParkingLot | unknown> {
    try {
      parkingLot.availableSpots = parkingLot.spots;
      const { success, error } = this.validateParkingLot(parkingLot);
      if (!success) {
        return error;
      }
      return this.parkingLotRepository.create(parkingLot);
    } catch (e) {
      return e;
    }
  }

  validateParkingLot(parkingLot: ParkingLot):
    { success: boolean, error?: Error} {
    if (!Object.values(ParkingType).includes(parkingLot.parkingType)) {
      return { success: false, error: new InvalidTypeError(ParkingType) };
    }

    return { success: true }
  }

  public async findAll(): Promise<ParkingLot[] | unknown> {
    try {
      return this.parkingLotRepository.findAll();
    } catch (e) {
      return e;
    }
  }

  public async findOne(id: string): Promise<ParkingLot | unknown> {
    try {
      return this.parkingLotRepository.findOne(id);
    } catch (e) {
      return e;
    }
  }
}

export default ParkingLotInteractor;
