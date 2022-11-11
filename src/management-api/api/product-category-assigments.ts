import { ProductCategoryAssigment, ProductCategoryFilter } from '../models/product'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductCategoryAssigments {
  public async list(
    params: ProductCategoryFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductCategoryAssigment[]>> {
    return await http
      .get(`/v3/catalog/products/category-assignments`, {
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

  public async createMany<TData extends ProductCategoryAssigment>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .put(`/v3/catalog/products/category-assignments`, {
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
    params: ProductCategoryFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/category-assignments`, {
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

export default new ProductCategoryAssigments()
