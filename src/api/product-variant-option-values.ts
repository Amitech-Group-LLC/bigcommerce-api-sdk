import { ProductOptionValue } from '../models/product'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductVariantOptionValues {
  public async list(
    itemId: number,
    optionId: number,
    params?: {
      exclude_fields?: string
      include_fields?: string
      limit?: number
      page?: number
    },
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductOptionValue[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/options/${optionId}/values`, {
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

  public async create<TData extends ProductOptionValue>(
    itemId: number,
    optionId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductOptionValue>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/options/${optionId}/values`, {
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
    optionId: number,
    valueId: number,
    params?: {
      exclude_fields?: string
      include_fields?: string
    },
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductOptionValue>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/options/${optionId}/values/${valueId}`, {
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

  public async update<TData extends ProductOptionValue>(
    itemId: number,
    optionId: number,
    valueId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductOptionValue>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/options/${optionId}/values/${valueId}`, {
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
    optionId: number,
    valueId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/options/${optionId}/values/${valueId}`, {
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

export default new ProductVariantOptionValues()
