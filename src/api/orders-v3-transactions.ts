import { OrdersV3TransactionData } from '../models/orders-v3'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Transactions {
  public async list(
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3TransactionData[]>> {
    return await http
      .get(`/v3/orders/${orderId}/transactions`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV3Transactions()
