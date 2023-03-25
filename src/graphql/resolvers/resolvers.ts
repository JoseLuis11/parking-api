const parkingLots = [
  {
    id: 1,
    name: 'Andares',
    spots: 123,
    contact: {
      id: 3,
      phoneNumber: '+526461988493'
    },
    parkingType: 'PUBLIC'
  }
]


const resolvers = {
  Query: {
    parkingLots: () => parkingLots
  },
};

export default resolvers;
