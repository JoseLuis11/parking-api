import Repository from './Repository';
import ParkingLot from '../entities/ParkingLot';

interface ParkingLotRepository extends Repository<ParkingLot, string> {
  create(parkingLot: ParkingLot): Promise<ParkingLot>;

  findAll(): Promise<ParkingLot[]>;

  findOne(id: string): Promise<ParkingLot|null>;
}

export default ParkingLotRepository;
