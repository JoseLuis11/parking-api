//using simulated enum as object in order to use js file in migrations
const UserTypeEnum = {
  CORPORATE:'corporate',
  PROVIDER: 'provider',
  VISITOR: 'visitor'
}

export default Object.freeze(UserTypeEnum);
