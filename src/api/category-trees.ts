import { Tree, CategoryTree, CategoryTreeFilter } from '../models/category-tree'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CategoryTrees {
  public async list(
    filterParams: CategoryTreeFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Tree[]>> {
    return await http
      .get(`/v3/catalog/trees`, {
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

  public async upsert<TData extends Tree>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<Tree>> {
    return await http
      .put(`/v3/catalog/trees`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    filterParams: CategoryTreeFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/trees`, { ...requestOptions, params: filterParams })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    itemId: number,
    params: {
      depth?: number
    },
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<CategoryTree[]>> {
    return await http
      .get(`/v3/catalog/trees/${itemId}/categories`, {
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
}

export default new CategoryTrees()
