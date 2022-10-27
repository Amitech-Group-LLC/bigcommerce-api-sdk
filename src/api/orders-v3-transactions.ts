import { OrdersV3TransactionData } from '../models/orders-v3-transaction'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Transactions {
  public async list(
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3TransactionData[]>> {
    return await http
      .get(`/v3/orders/${order_id}/transactions`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV3Transactions()
