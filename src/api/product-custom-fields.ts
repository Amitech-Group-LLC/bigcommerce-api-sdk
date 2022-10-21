import { ProductCustomField } from '../models/product'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductCustomFields {
  public async list(
    itemId: number,
    params: {
      exclude_fields?: string | string[]
      include_fields?: string | string[]
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductCustomField[]>> {
    return await http
      .get(`v3/catalog/products/${itemId}/custom-fields`, {
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

  public async createMany<TData extends ProductCustomField>(
    itemId: number,
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductCustomField>> {
    return await http
      .post(`v3/catalog/products/${itemId}/custom-fields`, {
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
    customFieldId: number,
    params: {
      exclude_fields?: string | string[]
      include_fields?: string | string[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductCustomField>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/custom-fields/${customFieldId}`, {
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

  public async update<TData extends ProductCustomField>(
    itemId: number,
    customFieldId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductCustomField>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/custom-fields/${customFieldId}`, {
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
    customFieldId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/custom-fields/${customFieldId}`, {
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

export default new ProductCustomFields()