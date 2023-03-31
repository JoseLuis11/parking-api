import CheckInRepository from '../repositories/CheckInRepository';
import CheckIn from '../entities/CheckIn';
import checkInSchema from './schemaValidators/checkInSchema';
import ParkingLotRepository from '../repositories/ParkingLotRepository';
import ParkingType from '../enums/ParkingType';
import UserType from '../enums/UserType';
import errors from './constants/error';
import ParkingLot from '../entities/ParkingLot';

class CheckInInteractor {
  constructor(private checkInRepository: CheckInRepository, private parkingLotRepository: ParkingLotRepository) {}

  public async create(checkIn: CheckIn): Promise<CheckIn> {
    try {
      await checkInSchema.validateAsync(checkIn);
      await this.validateCheckIn(checkIn)
      return await this.checkInRepository.create(checkIn);
    } catch (e) {
      return e;
    }
  }

  public async findAll(): Promise<CheckIn[]> {
    try {
      return await this.checkInRepository.findAll();
    } catch (e) {
      return e;
    }
  }

  private async validateCheckIn(checkIn: CheckIn) {
    const foundParkingLot = await this.parkingLotRepository.findOne(checkIn.parkingId);
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    this.validateParking(foundParkingLot,
      checkIn,
      ParkingType.PRIVATE,
      UserType.CORPORATE,
      [1, 2, 3, 4, 5],
      dayOfWeek,
      errors.PRIVATE_ONLY_WEEKDAYS
    );
    this.validateParking(foundParkingLot,
      checkIn,
      ParkingType.COURTESY,
      UserType.VISITOR,
      [6, 0],
      dayOfWeek,
      errors.PRIVATE_ONLY_WEEKENDS
    );
  }

  private validateParking(
    parkingLot: ParkingLot,
    checkIn: CheckIn,
    allowedParkingType: ParkingType,
    forUserType: UserType,
    allowedDays: number[],
    today: number,
    dayError: () => Error
  ) {
    if (parkingLot.parkingType === allowedParkingType) {
      if (checkIn.userType !== forUserType) {
        throw errors.INVALID_USER_TYPE(forUserType, allowedParkingType)
      }
      if (!allowedDays.includes(today)) {
        throw dayError()
      }
    }
  }
}

export default CheckInInteractor;
