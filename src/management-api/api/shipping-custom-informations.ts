import {
  ShippingCustomInformation,
  ShippingCustomInformationPut,
} from '../models/shipping'
import { ListResult, DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ShippingCustomInformations {
  public async list(
    params: {
      limit?: number
      page?: number
      'product_id:in'?: number[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ShippingCustomInformation[]>> {
    return await http
      .get(`/v3/shipping/products/customs-information`, {
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

  public async delete(
    params: {
      'product_id:in': string
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/shipping/products/customs-information`, {
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

  public async upsert<TData extends ShippingCustomInformationPut>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<ShippingCustomInformation[]>> {
    return await http
      .put(`/v3/shipping/products/customs-information`, {
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
}

export default new ShippingCustomInformations()
