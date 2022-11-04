import { CheckoutBillingAddressData, CheckoutData } from '../models/checkout'
import { DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutBillingAddresses {
  public async add<TData extends CheckoutBillingAddressData>(
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<CheckoutData>> {
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
  ): Promise<DataResult<CheckoutData>> {
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

export default new CheckoutBillingAddresses()
