import { ProductSortOrder } from '../models/product'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductSortOrders {
  public async get(
    itemId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .get(
        `/v3/catalog/categories/${itemId}/products/sort-order`,
        {
          ...requestOptions,
        }
      )
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ProductSortOrder>(
    itemId: number,
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductSortOrder[]>> {
    return await http
      .put(
        `/v3/catalog/categories/${itemId}/products/sort-order`,
        { ...requestOptions, data }
      )
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ProductSortOrders()
