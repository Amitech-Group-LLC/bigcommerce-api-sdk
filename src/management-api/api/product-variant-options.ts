import { ProductOption } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductVariantOptions {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductOption> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductOption[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/options`, {
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

  public async create<TData extends ProductOption>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductOption>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/options`, {
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
    params: FilterParam<ProductOption> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductOption>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/options/${optionId}`, {
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

  public async update<TData extends ProductOption>(
    itemId: number,
    optionId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductOption>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/options/${optionId}`, {
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
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/options/${optionId}`, {
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

export default new ProductVariantOptions()
