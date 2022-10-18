import { StoredInstrumentsData } from '../models/customer-stored-instrument'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerStoredInstruments {
  public async get(
    customerId: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<StoredInstrumentsData[]>> {
    return await http
      .get(`/v3/customers/${customerId}/stored-instruments`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerStoredInstruments()
