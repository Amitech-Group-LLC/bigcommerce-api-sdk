import {
  CategoryBatch,
  CategoryBatchFilter,
  CategoryBatchPost,
  CategoryBatchMeta,
  CategoryBatchError,
  CategoryBatchDelete,
  CategoryBatchUpdate
} from '../models/category'
import { Result, ListResult, ErrorResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CategoryBatchs {
  public async list(
    filterParams: CategoryBatchFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<CategoryBatch[]>> {
    return await http
      .get(`/v3/catalog/trees/categories`, {
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

  public async create<TData extends CategoryBatchPost>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ErrorResult<CategoryBatch[], CategoryBatchError, CategoryBatchMeta>> {
    return await http
      .post(`/v3/catalog/trees/categories`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CategoryBatchUpdate>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .put(`/v3/catalog/trees/categories`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete<TData extends CategoryBatchDelete>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<undefined, CategoryBatchMeta>> {
    return await http
      .delete(`/v3/catalog/trees/categories`, {
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
}

export default new CategoryBatchs()
