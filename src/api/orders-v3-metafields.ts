import { OrdersV3MetafieldParams, OrdersV3MetafieldData, OrdersV3MetafieldCreateData } from '../models/orders-v3-metafield'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Metafields {
  public async list<TParams extends OrdersV3MetafieldParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3MetafieldData[]>> {
    return await http
      .get(`/v3/orders/${order_id}/metafields`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }

  public async create<TData extends OrdersV3MetafieldCreateData>(
    order_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3MetafieldData>> {
    return await http
      .post(`/v3/orders/${order_id}/metafields`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }

  public async get(
    metafield_id: number,
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3MetafieldData>> {
    return await http
      .get(`/v3/orders/${order_id}/metafields/${metafield_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends OrdersV3MetafieldCreateData>(
    metafield_id: number,
    order_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3MetafieldData>> {
    return await http
      .put(`/v3/orders/${order_id}/metafields/${metafield_id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV3Metafields()
