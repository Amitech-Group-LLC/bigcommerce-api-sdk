import {
  ProductFilter,
  Product,
  ProductPost,
  ProductDelete,
  ProductUpdate,
} from '../models/product'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Products {
  public async list(
    filterParams: ProductFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Product[]>> {
    return await http
      .get(`/v3/catalog/products`, {
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

  public async updateMany<TData extends ProductPost>(
    data: TData[],
    params: {
      include_fields?: Array<keyof Product>
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Product[]>> {
    return await http
      .put(`/v3/catalog/products`, { ...requestOptions, data, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ProductPost>(
    data: TData[],
    params: {
      include_fields?: Array<keyof Product>
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Product>> {
    return await http
      .post(`/v3/catalog/products`, {
        ...requestOptions,
        data,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    requestOptions: RequestOptions = {},
    params: ProductDelete = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products`, { ...requestOptions, params })
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
      include?: string
      include_fields?: Array<keyof Product>
      exclude_fields?: Array<keyof Omit<Product, 'id'>>
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Product>> {
    return await http
      .get(`/v3/catalog/products/${itemId}`, {
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

  public async update<TData extends ProductUpdate>(
    itemId: number,
    data: TData,
    params: {
      include_fields?: Array<keyof Product>
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Product>> {
    return await http
      .put(`/v3/catalog/products/${itemId}`, {
        ...requestOptions,
        data,
        params,
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
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Products()
