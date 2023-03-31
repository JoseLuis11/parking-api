import Entity from './Entity';

interface CheckIn extends Entity {
  parkingId: string;
  checkedInAt: Date;
}
 export default CheckIn;
