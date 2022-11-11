import { OrdersV2TaxData, OrdersV2TaxParam } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class OrdersV2Taxes {
  public async list(
    orderId: number,
    params: OrdersV2TaxParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2TaxData[]> {
    return await http
      .get(`/v2/orders/${orderId}/taxes`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2Taxes()
