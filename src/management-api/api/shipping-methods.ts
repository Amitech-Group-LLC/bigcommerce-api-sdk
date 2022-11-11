import { ShippingMethod, ShippingMethodPost } from '../models/shipping'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ShippingMethods {
  public async list(
    zoneId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ShippingMethod[]> {
    return await http
      .get(`/v2/shipping/zones/${zoneId}/methods`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ShippingMethodPost>(
    zoneId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ShippingMethod> {
    return await http
      .post(`/v2/shipping/zones/${zoneId}/methods`, {
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
    zoneId: number,
    methodId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ShippingMethod> {
    return await http
      .get(`/v2/shipping/zones/${zoneId}/methods/${methodId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ShippingMethodPost>(
    zoneId: number,
    methodId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ShippingMethod> {
    return await http
      .put(`/v2/shipping/zones/${zoneId}/methods/${methodId}`, {
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
    zoneId: number,
    methodId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/shipping/zones/${zoneId}/methods/${methodId}`, {
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

export default new ShippingMethods()
