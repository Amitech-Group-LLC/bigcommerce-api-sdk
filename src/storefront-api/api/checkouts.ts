import { CheckoutData, CheckoutQueryParam, CheckoutUpdateMessage } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Checkouts {
  public async get(
    checkoutId: string,
    params: CheckoutQueryParam = {}
  ): Promise<CheckoutData> {
    return await http
      .get(`/api/storefront/checkouts/${checkoutId}`, { params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateCustomerMessage<TData extends CheckoutUpdateMessage>(
    checkoutId: string,
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .put(`/api/storefront/checkouts/${checkoutId}`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Checkouts()
