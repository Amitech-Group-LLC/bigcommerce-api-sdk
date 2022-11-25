import { WishlistData, WishlistAddData } from '../models/wishlist'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class WishlistsItems {
  public async delete(
    itemId: number,
    wishlistId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WishlistData>> {
    return await http
      .delete(`/v3/wishlists/${wishlistId}/items/${itemId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async add<TData extends WishlistAddData>(
    wishlistId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WishlistData>> {
    return await http
      .post(`/v3/wishlists/${wishlistId}/items`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new WishlistsItems()
