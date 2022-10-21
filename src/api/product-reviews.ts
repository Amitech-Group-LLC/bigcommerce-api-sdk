import { ProductReview } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductReviews {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductReview> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductReview[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/reviews`, {
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

  public async create<TData extends ProductReview>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductReview>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/reviews`, {
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
    reviewId: number,
    params: FilterParam<ProductReview> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductReview>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/reviews/${reviewId}`, {
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

  public async update<TData extends ProductReview>(
    itemId: number,
    reviewId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductReview>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/reviews/${reviewId}`, {
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
    reviewId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/reviews/${reviewId}`, {
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

export default new ProductReviews()
