import { CheckoutData, CheckoutBillingAddressData } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutBillingAddresses {
  public async add<TData extends CheckoutBillingAddressData>(
    checkoutId: string,
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .post(`/api/storefront/checkouts/${checkoutId}/billing-address`, { data })
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
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .put(`/api/storefront/checkouts/${checkoutId}/billing-address/${addressId}`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutBillingAddresses()
