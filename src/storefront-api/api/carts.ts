import { CartQueryParam, CartData, CartCreateData } from '../models/cart'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Carts {
  public async get(
    params: CartQueryParam = {}
  ): Promise<CartData[]> {
    return await http
      .get('/api/storefront/carts', { params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends CartCreateData>(
    params: CartQueryParam = {},
    data: TData
  ): Promise<CartData> {
    return await http
      .post('/api/storefront/carts', { params, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    cartId: string
  ): Promise<undefined> {
    return await http
      .delete(`/api/storefront/carts/${cartId}`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Carts()
