import http from './http';
import { GraphQLError } from 'graphql/error';

const errors = {
  //TODO: change this functions to classes that extend GraphQLError
  PARKING_LOT_NAME_ALREADY_EXISTS: (name: string) => {
    return new GraphQLError(`Parking lot with name ${name} already exists`, {
      extensions: {
        code: 'PARKING_LOT_NAME_ALREADY_EXISTS',
        http: { status: http.BAD_REQUEST }
      }
    });
  },
  INVALID_CONTACT: () => {
    return new GraphQLError('Invalid phone number', {
      extensions: {
        code: 'INVALID_CONTACT',
        http: { status: http.BAD_REQUEST }
      }
    })
  },
  ENTITY_NOT_FOUND: (entity: string, id: string): GraphQLError => {
    return new GraphQLError(`Entity ${entity} with id ${id} not found`, {
      extensions: {
        code: 'ENTITY_NOT_FOUND',
        http: { status: http.NOT_FOUND }
      }
    });
  },
  INVALID_USER_TYPE: (userType: string, parkingType: string): GraphQLError =>{
    return new GraphQLError(`parkingType ${parkingType} only admits userType ${userType}`, {
      extensions: {
        code: 'INVALID_USER_TYPE',
        http: { status: http.BAD_REQUEST }
      }
    })
  },
  PRIVATE_ONLY_WEEKDAYS: (): GraphQLError => {
    return new GraphQLError('Private parkingType can only by used on weekdays', {
      extensions: {
        code: 'PRIVATE_ONLY_WEEKDAYS',
        http: { status: http.BAD_REQUEST }
      }
    })
  },
  PRIVATE_ONLY_WEEKENDS: (): GraphQLError => {
    return new GraphQLError('Courtesy parkingType can only by used on weekends', {
      extensions: {
        code: 'PRIVATE_ONLY_WEEKENDS',
        http: { status: http.BAD_REQUEST }
      }
    })
  }

}

export default errors;
