import { CartPostData, Cart, CartInclude, CartRedirectUrls } from '../models/cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class Carts {
  public async create<TCart extends CartPostData>(
    cart: TCart,
    include?: CartInclude[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<TCart>> {
    return await http
      .post(`/v3/carts`, { ...requestOptions, data: cart, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get<TCart extends Cart>(
    cartId: string,
    include?: CartInclude[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<TCart>> {
    return await http
      .get(`/v3/carts/${cartId}`, { ...requestOptions, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    cartId: string,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/carts/${cartId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateCustomerId(
    cartId: string,
    customerId: number,
    include?: CartInclude[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<Cart>> {
    return await http
      .post(`/v3/carts/${cartId}`, {
        ...requestOptions,
        data: { customer_id: customerId },
        params: { include },
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createCartRedirectUrls(
    cartId: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CartRedirectUrls>> {
    return await http
      .post(`/v3/carts/${cartId}/redirect_urls`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Carts()
