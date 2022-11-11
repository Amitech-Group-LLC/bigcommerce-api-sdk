import { ProductImage } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductImages {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductImage> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductImage[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/images`, {
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

  public async create<TData extends ProductImage>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductImage>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/images`, {
        ...requestOptions,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
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
    imageId: number,
    params: FilterParam<ProductImage> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductImage>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/images/${imageId}`, {
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

  public async update<TData extends ProductImage>(
    itemId: number,
    imageId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductImage>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/images/${imageId}`, {
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
    imageId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/images/${imageId}`, {
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

export default new ProductImages()
