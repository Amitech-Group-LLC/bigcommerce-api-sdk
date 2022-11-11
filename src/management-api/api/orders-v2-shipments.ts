import { 
  OrdersV2ShipmentData, 
  OrderV2FilterParam, 
  ShipmentsCreateData, 
  ShipmentsCountData, 
  ShipmentsUpdateData 
} from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class OrdersV2Shipments {
  public async list(
    orderId: number,
    params: OrderV2FilterParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShipmentData[]> {
    return await http
      .get(`/v2/orders/${orderId}/shipments`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ShipmentsCreateData>(
    orderId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShipmentData> {
    return await http
      .post(`/v2/orders/${orderId}/shipments`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/orders/${orderId}/shipments`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async count(
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ShipmentsCountData> {
    return await http
      .get(`/v2/orders/${orderId}/shipments/count`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    orderId: number,
    shipmentId: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShipmentData> {
    return await http
      .get(`/v2/orders/${orderId}/shipments/${shipmentId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ShipmentsUpdateData>(
    orderId: number,
    shipmentId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShipmentData> {
    return await http
      .put(`/v2/orders/${orderId}/shipments/${shipmentId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    orderId: number,
    shipmentId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/orders/${orderId}/shipments/${shipmentId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2Shipments()
