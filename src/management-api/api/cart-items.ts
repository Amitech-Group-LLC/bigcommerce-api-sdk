import { CartAddLineItem, Cart, CartInclude, CartUpdateLineItem } from '../models/cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CartItems {
  public async add<TData extends CartAddLineItem>(
    cartId: string,
    data: TData,
    include?: CartInclude[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<Cart>> {
    return await http
      .post(`/v3/carts/${cartId}/items`, { ...requestOptions, data, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CartUpdateLineItem>(
    cartId: string,
    itemId: string,
    data: TData,
    include?: CartInclude[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<Cart>> {
    return await http
      .put(`/v3/carts/${cartId}/items/${itemId}`, { ...requestOptions, data, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    cartId: string,
    itemId: string,
    include?: CartInclude[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<Cart>> {
    return await http
      .delete(`/v3/carts/${cartId}/items/${itemId}`, { ...requestOptions, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CartItems()
