import { 
  OrdersV2ShippingAddressData, 
  OrderV2FilterParam,
  OrderShippingAddress
} from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class OrdersV2ShippingAddresses {
  public async list(
    orderId: number,
    params: OrderV2FilterParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShippingAddressData[]> {
    return await http
      .get(`/v2/orders/${orderId}/shipping_addresses`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    id: string,
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShippingAddressData> {
    return await http
      .get(`/v2/orders/${orderId}/shipping_addresses/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends OrderShippingAddress>(
    id: string,
    orderId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShippingAddressData> {
    return await http
      .put(`/v2/orders/${orderId}/shipping_addresses/${id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2ShippingAddresses()
