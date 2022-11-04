import { ProductComplexRule, ProductComplexRulePost } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductComplexRules {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductComplexRule> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductComplexRule[]>> {
    return await http
      .get(`v3/catalog/products/${itemId}/complex-rules`, {
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

  public async create<TData extends ProductComplexRulePost>(
    itemId: number,
    data: TData[],
    params: {
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductComplexRulePost>> {
    return await http
      .post(`v3/catalog/products/${itemId}/complex-rules`, {
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

  public async get(
    itemId: number,
    complexRuleId: number,
    params: FilterParam<ProductComplexRule> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductComplexRule>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/complex-rules/${complexRuleId}`, {
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

  public async update<TData extends ProductComplexRulePost>(
    itemId: number,
    complexRuleId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductComplexRulePost>> {
    return await http
      .put(`/v3/catalog/products/${itemId}/complex-rules/${complexRuleId}`, {
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
    complexRuleId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/products/${itemId}/complex-rules/${complexRuleId}`, {
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

export default new ProductComplexRules()
