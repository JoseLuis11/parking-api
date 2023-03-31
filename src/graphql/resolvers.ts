import ParkingLot from '../entities/ParkingLot';
import ParkingLotInteractor from '../interactors/';

const resolvers = {
  Query: {
    parkingLots: () => ParkingLotInteractor.findAll(),
    checkIns: () => [],
    parkingLot: (_: unknown, { id } : { id: string }) =>
      ParkingLotInteractor.findOne(id)
  },
  Mutation: {
    createParkingLot: async (_: unknown, parkingLot : ParkingLot) => {
      return ParkingLotInteractor.create(parkingLot);
    }
  }
};

export default resolvers;
