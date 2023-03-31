import Joi from 'joi';
import UserType from '../../enums/UserType';

const checkInSchema = Joi.object({
  parkingId: Joi.string()
    .required(),
  userType: Joi.string()
    .required()
    .valid(...Object.values(UserType)),
});

export default checkInSchema;
