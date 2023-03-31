import phoneUtil from '../../utils/phoneNumberUtil';
import errors from '../constants/error';
const phoneValidator = (phoneNumber: string) : string => {
  const number = phoneUtil.parseAndKeepRawInput(phoneNumber);
  if (!phoneUtil.isValidNumber(number)) {
    throw new Error(errors.INVALID_CONTACT)
  }
  return phoneNumber;
}

export default phoneValidator;
