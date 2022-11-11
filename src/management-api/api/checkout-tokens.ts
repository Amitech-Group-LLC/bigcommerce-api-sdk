import { CheckoutTokenParam, CheckoutTokenData } from '../models/checkout'
import { DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CheckoutTokens {
  public async create<TData extends CheckoutTokenParam>(
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<CheckoutTokenData>> {
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

export default new CheckoutTokens()
