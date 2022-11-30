import { CartQueryParam, CartData, CartItemLineItem } from '../models/cart'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CartItems {
  public async add<TData extends CartItemLineItem>(
    cartId: string,
    params: CartQueryParam,
    data: TData
  ): Promise<CartData> {
    return await http
      .post(`/api/storefront/carts/${cartId}/items`, { params, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CartItemLineItem>(
    cartId: string,
    itemId: number,
    params: CartQueryParam,
    data: TData
  ): Promise<CartData> {
    return await http
      .put(`/api/storefront/carts/${cartId}/items/${itemId}`, { params, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    cartId: string,
    itemId: number,
    params: CartQueryParam,
  ): Promise<CartData> {
    return await http
      .delete(`/api/storefront/carts/${cartId}/items/${itemId}`, { params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CartItems()
