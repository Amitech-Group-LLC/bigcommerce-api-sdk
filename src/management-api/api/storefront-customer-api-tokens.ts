import {
  StorefrontApiToken,
  StorefrontCustomerApiTokenData,
} from '../models/storefront-api-token'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class StorefrontCustomerApiTokens {
  public async create<TData extends StorefrontCustomerApiTokenData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<StorefrontApiToken>> {
    return await http
      .post(`/v3/storefront/api-token-customer-impersonation`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new StorefrontCustomerApiTokens()
