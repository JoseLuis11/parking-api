import errors from '../constants/error';

class InvalidTypeError extends Error {
  type: object;
  message: string;
  constructor(type: object) {
    super();
    this.type = type;
    this.message = errors.INVALID_TYPE(this.type)
  }
}

export default InvalidTypeError;
