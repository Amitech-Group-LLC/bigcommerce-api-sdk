import { OrdersV3MetafieldParam, OrdersV3MetafieldData, OrdersV3MetafieldCreateData } from '../models/orders-v3'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Metafields {
  public async list(
    orderId: number,
    params: OrdersV3MetafieldParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3MetafieldData[]>> {
    return await http
      .get(`/v3/orders/${orderId}/metafields`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }

  public async create<TData extends OrdersV3MetafieldCreateData>(
    orderId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3MetafieldData>> {
    return await http
      .post(`/v3/orders/${orderId}/metafields`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }

  public async get(
    metafieldId: number,
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3MetafieldData>> {
    return await http
      .get(`/v3/orders/${orderId}/metafields/${metafieldId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends OrdersV3MetafieldCreateData>(
    metafieldId: number,
    orderId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3MetafieldData>> {
    return await http
      .put(`/v3/orders/${orderId}/metafields/${metafieldId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    metafieldId: number,
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/orders/${orderId}/metafields/${metafieldId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV3Metafields()
