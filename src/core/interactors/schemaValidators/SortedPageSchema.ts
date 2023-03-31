import Joi from 'joi';
import parkingLotSortOptions from '../constants/parkingLotSortOptions';
import OrderDirection from '../../enums/OrderDirection';

const sortSchema = {
  order: Joi.string()
    .valid(...Object.values(OrderDirection)),
  by: Joi.string()
    .valid(...parkingLotSortOptions)
}

const sortedPageSchema = Joi.object({
  skip: Joi.number()
    .min(0),
  limit: Joi.number()
    .min(1),
  sorts: Joi.array()
    .items({
      ...sortSchema
    }),
});

export default sortedPageSchema;
