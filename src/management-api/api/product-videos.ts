import { ProductVideo } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductVideos {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductVideo> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductVideo[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/videos`, {
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

  public async create<TData extends ProductVideo>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductVideo>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/videos`, {
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

  public async get(
    itemId: number,
    videoId: number,
    params: FilterParam<ProductVideo> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductVideo>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/videos/${videoId}`, {
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

  public async update<TData extends ProductVideo>(
    itemId: number,
    videoId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductVideo>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/videos/${videoId}`, {
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
    itemId: number,
    videoId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/videos/${videoId}`, {
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

export default new ProductVideos()
