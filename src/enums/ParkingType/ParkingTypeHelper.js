import ParkingType from './ParkingType.js';

class ParkingTypeHelper {
  static getTypes() {
    return Object.values(ParkingType);
  }
}

export default ParkingTypeHelper;
