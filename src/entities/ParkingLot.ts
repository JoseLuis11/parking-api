import ParkingType from '../enums/ParkingType';
import Entity from './Entity';

interface ParkingLot extends Entity{
  name: string;
  spots: number;
  availableSpots: number;
  contact?: string;
  parkingType: ParkingType;
}

export default ParkingLot;
