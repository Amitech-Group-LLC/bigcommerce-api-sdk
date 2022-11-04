import { PriceAssigmentFilter, PriceAssigment, PriceAssigmentDeleteFilter, PriceAssigmentDelete } from '../models/price-list'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class PriceListAssigments {
  public async list(
    filterParams: PriceAssigmentFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<PriceAssigment[]>> {
    return await http
      .get(`/v3/pricelists/assigments`, {
        ...requestOptions,
        params: filterParams,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    params: PriceAssigmentDeleteFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<PriceAssigmentDelete>> {
    return await http
      .get(`/v3/pricelists/assigments`, {
        ...requestOptions,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new PriceListAssigments()
