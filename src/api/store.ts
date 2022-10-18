import { StoreInformation } from '../models/store-information'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Store {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<StoreInformation> {
    return await http
      .get(`/v2/store`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Store()
