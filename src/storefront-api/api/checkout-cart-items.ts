import { CheckoutData, CheckoutLineItemData } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutCartItems {
  public async update<TData extends CheckoutLineItemData>(
    cartId: string,
    checkoutId: string,
    itemId: string,
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .put(`/api/storefront/checkouts/${checkoutId}/carts/${cartId}/items/${itemId}`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    cartId: string,
    checkoutId: string,
    itemId: string,
  ): Promise<CheckoutData> {
    return await http
      .delete(`/api/storefront/checkouts/${checkoutId}/carts/${cartId}/items/${itemId}`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutCartItems()
