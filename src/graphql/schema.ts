const typeDefs = `#graphql

type ParkingLot {
    id: ID!
    name: String
    spots: Int
    contact: String
    parkingType: String,
    createdAt: String
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
    checkIns: [CheckIn]
}
`;

export default typeDefs;
