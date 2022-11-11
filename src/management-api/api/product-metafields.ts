import { ProductMetafield } from '../models/product'
import { FilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductMetafields {
  public async list(
    itemId: number,
    params: {
      include_fields?: Array<keyof ProductMetafield>
      exclude_fields?: Array<keyof Omit<ProductMetafield, 'id'>>
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
    params: FilterParam<ProductMetafield> = {},
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
