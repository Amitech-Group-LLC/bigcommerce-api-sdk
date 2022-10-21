import { CheckoutBillingAddressData } from '../models/checkout-billing-address'
import { CheckoutData } from '../models/checkout'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutBillingAddress {
  public async add<TData extends CheckoutBillingAddressData>(
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutData>> {
    return await http
      .post(`/v3/checkouts/${checkoutId}/billing-address`, {...requestOptions, data})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutBillingAddress()
