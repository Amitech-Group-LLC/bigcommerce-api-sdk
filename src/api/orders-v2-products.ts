import { OrdersV2ProductsData, OrderV2FilterParam } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Products {
  public async list(
    orderId: number,
    params: OrderV2FilterParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ProductsData[]> {
    return await http
      .get(`/v2/orders/${orderId}/products`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    orderId: number,
    productId: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ProductsData> {
    return await http
      .get(`/v2/orders/${orderId}/products/${productId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2Products()
