import { ShippingZone, ShippingZonePost, ShippingZonePut } from '../models/shipping'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ShippingZones {
  public async list(
    requestOptions: RequestOptions = {}
  ): Promise<ShippingZone[]> {
    return await http
      .get(`/v2/shipping/zones`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ShippingZonePost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ShippingZone> {
    return await http
      .post(`/v2/shipping/zones`, {
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
    requestOptions: RequestOptions = {}
  ): Promise<ShippingZone> {
    return await http
      .get(`/v2/shipping/zones/${zoneId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ShippingZonePut>(
    zoneId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ShippingZonePut> {
    return await http
      .put(`/v2/shipping/zones/${zoneId}`, {
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
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/shipping/zones/${zoneId}`, {
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

export default new ShippingZones()
