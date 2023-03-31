import CheckIn from '../entities/CheckIn';
import Repository from './Repository';

interface CheckInRepository extends Repository<CheckIn, string> {
  create(checkIn: CheckIn): Promise<CheckIn>;

  findAll(): Promise<CheckIn[]>;
}

export default CheckInRepository;
