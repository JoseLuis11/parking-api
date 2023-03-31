import Repository from './Repository';
import ParkingLot from '../entities/ParkingLot';

interface ParkingLotRepository extends Repository<ParkingLot, string> {
  create(parkingLot: ParkingLot): Promise<ParkingLot>;

  findAll(options: object): Promise<ParkingLot[]>;

  update(id: string, parkingLot: ParkingLot): Promise<ParkingLot>;

  findOne(id: string): Promise<ParkingLot>;

  findByName(name: string): Promise<ParkingLot | null>

}

export default ParkingLotRepository;
