const typeDefs = `#graphql

type ParkingLot {
    id: ID!
    name: String!
    spots: Int!
    contact: String!
    parkingType: String!
    createdAt: String
    updatedAt: String
}

input ParkingLotCreation {
    name: String
    spots: Int
    contact: String
    parkingType: String
}

input ParkingLotUpdate {
    spots: Int
    contact: String
}

type ParkingLotsResponse {
    totalItems: Int
    data: [ParkingLot]
}

type CheckIn {
    id: ID!
    parkingId: Int!
    userType: String!
    checkedInAt: String!
    checkedOutAt: String!
}

input Sort {
    by: String,
    order: String
}

input Page {
    skip: Int,
    limit: Int
}

type Query {
    parkingLots(page: Page, sorts: [Sort]): ParkingLotsResponse
    checkIns: [CheckIn]
}

type Mutation {
    createParkingLot(parkingLot: ParkingLotCreation): ParkingLot
    updateParkingLot(id: String, parkingLot: ParkingLotUpdate): ParkingLot
}
`;

export default typeDefs;
