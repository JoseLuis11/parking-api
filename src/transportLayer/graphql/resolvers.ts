import ParkingLot from '../../core/entities/ParkingLot';
import { checkInInteractor, parkingLotInteractor } from '../../core/interactors';
import Sort from '../../core/interactors/pagedSortering/Sort';
import Page from '../../core/interactors/pagedSortering/Page';
import CheckIn from '../../core/entities/CheckIn';

const resolvers = {
  Query: {
    parkingLots: (_: unknown, { page, sorts } : { page: Page, sorts: Sort[]}) => {
      return parkingLotInteractor.findAll(page, sorts);
    },
    checkIns: () => checkInInteractor.findAll()
  },
  Mutation: {
    createParkingLot: (_: unknown, { parkingLot } : { parkingLot : ParkingLot}) => {
      return parkingLotInteractor.create(parkingLot);
    },
    updateParkingLot: (_: unknown, { id, parkingLot } : { id: string, parkingLot: ParkingLot}) => {
      return parkingLotInteractor.update(id, parkingLot);
    },
    createCheckIn: (_: unknown, { checkIn } : { checkIn: CheckIn }) => {
      return checkInInteractor.create(checkIn);
    }
  }
};

export default resolvers;
