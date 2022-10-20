import { ProductChannelAssigment, ProductChannelFilter } from '../models/product'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductChannelAssigments {
  public async list(
    params: ProductChannelFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductChannelAssigment[]>> {
    return await http
      .get(`/v3/catalog/products/channel-assignments`, {
        ...requestOptions,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createMany<TData extends ProductChannelAssigment>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .put(`/v3/catalog/products/channel-assignments`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    params: ProductChannelFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/channel-assignments`, {
        ...requestOptions,
        params
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ProductChannelAssigments()
