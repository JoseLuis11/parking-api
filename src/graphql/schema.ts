const typeDefs = `#graphql

type Contact {
    id: ID!
    phoneNumber: String
}

type ParkingLot {
    id: ID!
    name: String
    spots: Int
    contact: Contact
    parkingType: String
}

type Query {
    parkingLots: [ParkingLot]
}
`;

export default typeDefs;
