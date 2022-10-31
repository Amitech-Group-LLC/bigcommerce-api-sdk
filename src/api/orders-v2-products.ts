import { OrdersV2ProductsData, OrderV2ProductParams } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Products {
  public async list<TParams extends OrderV2ProductParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ProductsData[]> {
    return await http
      .get(`/v2/orders/${order_id}/products`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    order_id: number,
    product_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ProductsData> {
    return await http
      .get(`/v2/orders/${order_id}/products/${product_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2Products()
