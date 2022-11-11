import { ProductCustomField } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductCustomFields {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductCustomField> = {},
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
    params: FilterParam<ProductCustomField> = {},
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
