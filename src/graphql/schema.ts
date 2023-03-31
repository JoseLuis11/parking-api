const typeDefs = `#graphql

type ParkingLot {
    id: ID!
    name: String
    spots: Int
    availableSpots: Int
    contact: String
    parkingType: String,
    createdAt: String,
    updatedAt: String
}

type CheckIn {
    id: ID!
    parkingId: Int
    userType: String
    checkedInAt: String
    checkedOutAt: String
}

type Query {
    parkingLots: [ParkingLot]
    parkingLot(id: String): ParkingLot
    checkIns: [CheckIn]
}

type Mutation {
    createParkingLot(name: String
        spots: Int
        availableSpots: Int
        contact: String
        parkingType: String,): ParkingLot
}
`;

export default typeDefs;
