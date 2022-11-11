import { ProductModifier } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductModifiers {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductModifier> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductModifier[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/modifiers`, {
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

  public async create<TData extends ProductModifier>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductModifier>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/modifiers`, {
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
    params: FilterParam<ProductModifier> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductModifier>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/modifiers/${modifierId}`, {
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

  public async update<TData extends ProductModifier>(
    itemId: number,
    modifierId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductModifier>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/modifiers/${modifierId}`, {
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
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/modifiers/${modifierId}`, {
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

export default new ProductModifiers()
