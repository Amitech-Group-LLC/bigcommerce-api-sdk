import {
  StorefrontApiToken,
  StorefrontApiTokenData,
} from '../models/storefront-api-token'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class StorefrontApiTokens {
  public async create<TData extends StorefrontApiTokenData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<StorefrontApiToken>> {
    return await http
      .post(`/v3/storefront/api-token`, {
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

  public async revoke(
    apiToken: string,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/storefront/api-token`, {
        ...requestOptions,
        headers: {
          'Sf-Api-Token': apiToken,
        },
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new StorefrontApiTokens()
