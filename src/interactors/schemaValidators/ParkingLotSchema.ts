import Joi from 'joi';
import accessEnv from '../../utils/accessEnv';
import ParkingType from '../../enums/ParkingType';

const MAX_SPOTS_ALLOWED = Number(accessEnv('MAX_SPOTS_ALLOWED'));
const MIN_SPOTS_ALLOWED = Number(accessEnv('MIN_SPOTS_ALLOWED'));

const commonSchema = {
  spots: Joi.number()
    .min(MIN_SPOTS_ALLOWED)
    .max(MAX_SPOTS_ALLOWED)
    .required(),
  contact: Joi.string()
    .required(),
}

const parkingLotSchema = Joi.object({
  name: Joi.string()
    .required(),
  parkingType: Joi.string()
    .required()
    .valid(...Object.values(ParkingType)),
  ...commonSchema
});

const parkingLotUpdateSchema = Joi.object({
  ...commonSchema
})

export { parkingLotSchema, parkingLotUpdateSchema };
