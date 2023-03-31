import Entity from './Entity';
import UserType from '../enums/UserType';

interface CheckIn extends Entity {
  parkingId: string;
  userType: UserType
}
 export default CheckIn;
