import { CheckoutBillingAddressData } from '../models/checkout'
import { CheckoutData } from '../models/checkout'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutsBillingAddress {
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

  public async update<TData extends CheckoutBillingAddressData>(
    addressId: number,
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutData>> {
    return await http
      .put(`/v3/checkouts/${checkoutId}/billing-address/${addressId}`, {...requestOptions, data})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutsBillingAddress()
