import { ProductMetafield } from '../models/product'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductMetafields {
  public async list(
    itemId: number,
    params: {
      exclude_fields?: string | string[]
      include_fields?: string | string[]
      limit?: number
      page?: number
      key?: string
      namespace?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductMetafield[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/metafields`, {
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

  public async create<TData extends ProductMetafield>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductMetafield>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/metafields`, {
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
    metafieldId: number,
    params: {
      exclude_fields?: string | string[]
      include_fields?: string | string[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductMetafield>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/metafields/${metafieldId}`, {
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

  public async update<TData extends ProductMetafield>(
    itemId: number,
    metafieldId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductMetafield>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/metafields/${metafieldId}`, {
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
    metafieldId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/metafields/${metafieldId}`, {
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

export default new ProductMetafields()
