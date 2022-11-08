import { ShippingCarier, ShippingCarierDelete } from '../models/shipping'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ShippingCarriers {
  public async update<TData extends ShippingCarier>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .put(`/v2/shipping/carrier/connection`, {
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

  public async create<TData extends ShippingCarier>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .post(`/v2/shipping/carrier/connection`, {
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

  public async delete<TData extends ShippingCarierDelete>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/shipping/carrier/connection`, {
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

export default new ShippingCarriers()
