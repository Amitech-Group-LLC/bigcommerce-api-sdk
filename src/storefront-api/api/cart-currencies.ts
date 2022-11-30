import { CartData, CartCurrenciesData } from '../models/cart'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CartCurrencies {
  public async update(
    cartId: string,
    data: CartCurrenciesData
  ): Promise<CartData[]> {
    return await http
      .post(`/api/storefront/carts/${cartId}/currency`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CartCurrencies()
