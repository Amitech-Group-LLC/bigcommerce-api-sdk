import { ProductModifierOptionValue } from '../models/product'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductModifierValues {
  public async list(
    itemId: number,
    modifierId: number,
    params: {
      exclude_fields?: string | string[]
      include_fields?: string | string[]
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductModifierOptionValue[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/modifiers/${modifierId}/values`, {
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

  public async create<TData extends ProductModifierOptionValue>(
    itemId: number,
    modifierId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductModifierOptionValue>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/modifiers/${modifierId}/values`, {
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
    modifierId: number,
    valueId: number,
    params: {
      exclude_fields?: string | string[]
      include_fields?: string | string[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductModifierOptionValue>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/modifiers/${modifierId}/values/${valueId}`, {
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

  public async update<TData extends ProductModifierOptionValue>(
    itemId: number,
    modifierId: number,
    valueId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductModifierOptionValue>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/modifiers/${modifierId}/values/${valueId}`, {
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
    modifierId: number,
    valueId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/modifiers/${modifierId}/values/${valueId}`, {
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

export default new ProductModifierValues()
