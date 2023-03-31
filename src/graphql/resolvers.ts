import ParkingLot from '../entities/ParkingLot';
import ParkingLotInteractor from '../interactors/';
import Sort from '../interactors/pagedSortering/Sort';
import Page from '../interactors/pagedSortering/Page';

const resolvers = {
  Query: {
    parkingLots: (_: unknown, { page, sorts } : { page: Page, sorts: Sort[]}) => {
      return ParkingLotInteractor.findAll(page, sorts);
    },
    checkIns: () => []
  },
  Mutation: {
    createParkingLot: (_: unknown, { parkingLot } : { parkingLot : ParkingLot}) => {
      return ParkingLotInteractor.create(parkingLot);
    },
    updateParkingLot: (_: unknown, { id, parkingLot } : { id: string, parkingLot: ParkingLot}) => {
      return ParkingLotInteractor.update(id, parkingLot);
    }
  }
};

export default resolvers;
