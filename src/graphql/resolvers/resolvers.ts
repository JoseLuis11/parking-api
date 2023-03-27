import { ParkingLot } from '../../database/models/ParkingLot.js';
import { CheckIn } from '../../database/models/CheckIn.js';

const resolvers = {
  Query: {
    parkingLots: () => ParkingLot.findAll(),
    checkIns: () => CheckIn.findAll()
  }
};

export default resolvers;
