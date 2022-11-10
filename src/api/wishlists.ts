import { WishlistParam, WishlistData, WishlistCreateData, WishlistUpdateData } from '../models/wishlist'
import { ListResult, Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Wishlists {
  public async list(
    params: WishlistParam,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WishlistData[]>> {
    return await http
      .get('/v3/wishlists', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends WishlistCreateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WishlistData>> {
    return await http
      .post('/v3/wishlists', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    wishlistId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WishlistData>> {
    return await http
      .get(`/v3/wishlists/${wishlistId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends WishlistUpdateData>(
    wishlistId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WishlistData>> {
    return await http
      .put(`/v3/wishlists/${wishlistId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    wishlistId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/wishlists/${wishlistId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Wishlists()
