import { 
  OrdersV2ShippingAddressData, 
  OrdersV2ShippingAddressParams,
  OrdersV2ShippinsAddressUpdateData
} from '../models/orders-v2-shipping-address'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2ShippingAddresses {
  public async list<TParams extends OrdersV2ShippingAddressParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShippingAddressData[]>> {
    return await http
      .get(`/v2/orders/${order_id}/shipping_addresses`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    id: string,
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShippingAddressData>> {
    return await http
      .get(`/v2/orders/${order_id}/shipping_addresses/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends OrdersV2ShippinsAddressUpdateData>(
    id: string,
    order_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShippingAddressData>> {
    return await http
      .put(`/v2/orders/${order_id}/shipping_addresses/${id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2ShippingAddresses()
