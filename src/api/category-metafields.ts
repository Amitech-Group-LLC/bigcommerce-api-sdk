import { CategoryMetafield, CategoryMetafieldFilter } from '../models/category'
import { FilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CategoryMetafields {
  public async list(
    itemId: number,
    filterParams: CategoryMetafieldFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<CategoryMetafield[]>> {
    return await http
      .get(`/v3/catalog/categories/${itemId}/metafields`, {
        ...requestOptions,
        params: filterParams,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends CategoryMetafield>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CategoryMetafield>> {
    return await http
      .post(`/v3/catalog/categories/${itemId}/metafields`, {
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
    params: FilterParam<CategoryMetafield> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<CategoryMetafield>> {
    return await http
      .get(`/v3/catalog/categories/${itemId}/metafields/${metafieldId}`, {
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

  public async update<TData extends CategoryMetafield>(
    itemId: number,
    metafieldId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CategoryMetafield>> {
    return await http
      .put(`/v3/catalog/categories/${itemId}/metafields/${metafieldId}`, {
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
      .delete(`/v3/catalog/categories/${itemId}/metafields/${metafieldId}`, {
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

export default new CategoryMetafields()
