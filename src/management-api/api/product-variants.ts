import { ProductVariant } from '../models/product'
import { ProductFilterParam } from '../models/filter-param'
import { FilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductVariants {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductVariant> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductVariant[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/variants`, {
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

  public async create<TData extends ProductVariant>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductVariant>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/variants`, {
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
    variantId: number,
    params: FilterParam<ProductVariant> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductVariant>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/variants/${variantId}`, {
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

  public async update<TData extends ProductVariant>(
    itemId: number,
    variantId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductVariant>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/variants/${variantId}`, {
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
    variantId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/variants/${variantId}`, {
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

export default new ProductVariants()
