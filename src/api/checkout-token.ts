import { CheckoutTokenParams, CheckoutTokenData } from '../models/checkout-token'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutToken {
  public async create<TData extends CheckoutTokenParams>(
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutTokenData>> {
    return await http
      .post(`/v3/checkouts/${checkoutId}/token`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutToken()
