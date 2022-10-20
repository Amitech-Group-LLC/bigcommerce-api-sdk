import { ChekoutIncludeParams, CheckoutData } from '../models/checkout'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Checkout {
  public async get(
    checkoutId: string,
    include?: ChekoutIncludeParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutData>> {
    return await http
      .get(`/v3/checkouts/${checkoutId}`, { ...requestOptions, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Checkout()
