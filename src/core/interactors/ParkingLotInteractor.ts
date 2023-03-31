import ParkingLotRepository from '../repositories/ParkingLotRepository';
import ParkingLot from '../entities/ParkingLot';
import PaginatedResponse from './responses/PaginatedResponse';
import { parkingLotSchema, parkingLotUpdateSchema } from './schemaValidators/ParkingLotSchema';
import sortedPageSchema from './schemaValidators/SortedPageSchema';
import Sort from './pagedSortering/Sort';
import Page from './pagedSortering/Page';
import errors from './constants/error';
import phoneUtil from '../../utils/phoneNumberUtil';


class ParkingLotInteractor {
  constructor(private parkingLotRepository: ParkingLotRepository) {}

  public async create(parkingLot: ParkingLot): Promise<ParkingLot> {
    try {
      await parkingLotSchema.validateAsync(parkingLot);
      await this.validateParkingLot(parkingLot);
      return await this.parkingLotRepository.create(parkingLot);
    } catch (e) {
      return e;
    }
  }

  public async findAll(page: Page, sorts: Sort[]): Promise<PaginatedResponse<ParkingLot>> {
    [page, sorts] = this.assignDefaultPageSortedValues(page, sorts);
    try {
      const objectToValidate = { ...page, sorts };
      await sortedPageSchema.validateAsync(objectToValidate);
      const options = this.getOptions(page, sorts);
      const parkingLots = await this.parkingLotRepository.findAll(options);
      return { totalItems: parkingLots.length, data: parkingLots };
    } catch (e) {
      return e;
    }
  }

  public async update(id: string, parkingLot: ParkingLot): Promise<ParkingLot> {
    try {
      await parkingLotUpdateSchema.validateAsync(parkingLot);
      return await this.parkingLotRepository.update(id, parkingLot);
    } catch (e) {
      return e;
    }
  }

  private async validateParkingLot(parkingLot: ParkingLot) {
    const foundParkingLot = await this.parkingLotRepository.findByName(parkingLot.name)
    if (foundParkingLot) {
      throw errors.PARKING_LOT_NAME_ALREADY_EXISTS(parkingLot.name);
    }
    this.validatePhoneNumber(parkingLot.contact);
  }

  private validatePhoneNumber(phoneNumber: string) {
    const number = phoneUtil.parseAndKeepRawInput(phoneNumber);
    if (!phoneUtil.isValidNumber(number)) {
      throw errors.INVALID_CONTACT();
    }
  }

  private assignDefaultPageSortedValues(page: Page, sorts: Sort[]): [Page, Sort[]] {
    if (page) {
      page.skip ??= 0;
    }
    if (sorts) {
      sorts = sorts.map(sort => {
        sort.by ??= 'id';
        sort.order ??= 'ASC';
        return { by: sort.by, order: sort.order };
      });
    }
    return [page, sorts];
  }

  private getOptions(page: Page, sorts: Sort[]): object {
    let options: object = {};

    if (sorts) {
      options = {
        order: sorts.map(sort => [sort.by, sort.order])
      }
    }

    if (page && page.limit) {
      options = {
        ...options,
        limit: page.limit,
        offset: page.skip * page.limit,
      }
    }
    return options;
  }

}

export default ParkingLotInteractor;
