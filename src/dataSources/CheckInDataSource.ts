import CheckInRepository from '../repositories/CheckInRepository';
import CheckIn from '../entities/CheckIn';
import CheckInModel from './sequelize/CheckInModel';

class CheckInDataSource implements CheckInRepository {
  async create(checkIn: CheckIn): Promise<CheckIn> {
    return await CheckInModel.create(checkIn);
  }

  async findAll(): Promise<CheckIn[]> {
    return await CheckInModel.findAll();
  }

}

export default CheckInDataSource;
