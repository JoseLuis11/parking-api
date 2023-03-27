import UserType from './UserType.js';

class UserTypeHelper {
  static getTypes() {
    return Object.values(UserType);
  }
}

export default UserTypeHelper;
