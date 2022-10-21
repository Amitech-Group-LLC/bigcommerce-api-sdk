import { Variant, VariantUpdate } from '../models/variant'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Variants {
  public async list(
    params: {
      exclude_fields?: string
      id?: number
      include_fields?: string
      limit?: number
      page?: number
      product_id?: string
      sku?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Variant[]>> {
    return await http
      .get(`/v3/catalog/variants`, {
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

  public async update<TData extends VariantUpdate>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Variant[]>> {
    return await http
      .put(`/v3/catalog/variants`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Variants()
