import { ProductReview } from '../models/product'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductReviews {
  public async list(
    itemId: number,
    params?: {
      exclude_fields?: string
      include_fields?: string
      limit?: number
      page?: number
      status?: number
    },
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
    params?: {
      exclude_fields?: string
      include_fields?: string
    },
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
