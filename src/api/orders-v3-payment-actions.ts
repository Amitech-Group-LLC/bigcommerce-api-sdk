import { OrdersV3PaymentActionsCreateData, OrdersV3PaymentActionsCreateDefaultData, OrdersV3PaymentActionsRefundQuote } from '../models/orders-v3-payment-action'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3PaymentActions {
  public async capture(
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3PaymentActionsCreateDefaultData> {
    return await http
      .post(`/v3/orders/${order_id}/payment_actions/capture`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async void(
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3PaymentActionsCreateDefaultData> {
    return await http
      .post(`/v3/orders/${order_id}/payment_actions/void`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createRefundQuote<TData extends OrdersV3PaymentActionsCreateData>(
    order_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3PaymentActionsRefundQuote>> {
    return await http
      .post(`/v3/orders/${order_id}/payment_actions/void`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV3PaymentActions()
