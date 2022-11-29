import { CheckoutData, CheckoutConsigmentData, CheckoutConsigmentQueryParam, CheckoutConsigmentUpdateData } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutConsignments {
  public async create<TData extends CheckoutConsigmentData>(
    checkoutId: string,
    params: CheckoutConsigmentQueryParam = {},
    data: TData[]
  ): Promise<CheckoutData> {
    return await http
      .post(`/api/storefront/checkouts/${checkoutId}/consignments`, { params, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CheckoutConsigmentUpdateData>(
    checkoutId: string,
    consignmentId: string,
    params: CheckoutConsigmentQueryParam = {},
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .put(`/api/storefront/checkouts/${checkoutId}/consignments/${consignmentId}`, { params, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    checkoutId: string,
    consignmentId: string
  ): Promise<CheckoutData> {
    return await http
      .delete(`/api/storefront/checkouts/${checkoutId}/consignments/${consignmentId}`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutConsignments()
