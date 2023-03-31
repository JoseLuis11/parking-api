import ParkingLotInteractor from './ParkingLotInteractor';
import ParkingLotDataSource from '../dataSources/ParkingLotDataSource';

const parkingLotDataSource = new ParkingLotDataSource();
const parkingLotInteractor = new ParkingLotInteractor(parkingLotDataSource);

export default parkingLotInteractor;
