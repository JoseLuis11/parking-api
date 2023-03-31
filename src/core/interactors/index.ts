import ParkingLotInteractor from './ParkingLotInteractor';
import ParkingLotDataSource from '../../dataSources/ParkingLotDataSource';
import CheckInDataSource from '../../dataSources/CheckInDataSource';
import CheckInInteractor from './CheckInInteractor';

const parkingLotDataSource = new ParkingLotDataSource();
const parkingLotInteractor = new ParkingLotInteractor(parkingLotDataSource);
const checkInDataSource = new CheckInDataSource();
const checkInInteractor = new CheckInInteractor(checkInDataSource, parkingLotDataSource);
export { parkingLotInteractor, checkInInteractor };
