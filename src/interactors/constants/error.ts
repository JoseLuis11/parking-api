const errors = {
  INVALID_CONTACT: 'Invalid phone number',
  ENTITY_NOT_FOUND: (entity: string, id: string) => `Entity ${entity} with id ${id} not found`
}

export default errors;
