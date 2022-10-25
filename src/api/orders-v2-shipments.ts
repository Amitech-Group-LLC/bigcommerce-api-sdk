import { OrdersV2ShipmentData, ShipmentsParams, ShipmentsCreateData, ShipmentsCountData } from '../models/orders-v2-shipment'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Shipments {
  public async list<TParams extends ShipmentsParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShipmentData[]>> {
    return await http
      .get(`/v2/orders/${order_id}/shipments`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async create<TData extends ShipmentsCreateData>(
    order_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShipmentData>> {
    return await http
      .post(`/v2/orders/${order_id}/shipments`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async delete(
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/orders/${order_id}/shipments`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async count(
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ShipmentsCountData>> {
    return await http
      .get(`/v2/orders/${order_id}/shipments/count`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV2Shipments()
