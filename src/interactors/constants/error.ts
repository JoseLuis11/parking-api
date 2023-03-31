const errors = {
  INVALID_TYPE: (type: object): string =>
    'Invalid type, valid types: ' + Object.values(type)
}

export default errors;
