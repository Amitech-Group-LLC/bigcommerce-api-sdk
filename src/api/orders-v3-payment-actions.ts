import { 
  OrdersV3PaymentActionsCreateData, 
  OrdersV3PaymentActionsRefundQuote,
  OrdersV3PaymentActionsRefund,
  OrdersV3PaymentActionsRefundData,
  OrdersV3PaymentActionsParams,
  OrdersV3Error
} from '../models/orders-v3'
import { Result, ListResult, ErrorResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3PaymentActions {
  public async capture(
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<object> {
    return await http
      .post(`/v3/orders/${orderId}/payment_actions/capture`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async void(
    orderId: number,
    requestOptions: RequestOptions = {}
  ): Promise<object> {
    return await http
      .post(`/v3/orders/${orderId}/payment_actions/void`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createRefundQuote<TData extends OrdersV3PaymentActionsCreateData>(
    orderId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3PaymentActionsRefundQuote>> {
    return await http
      .post(`/v3/orders/${orderId}/payment_actions/refund_quotes`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createRefund<TData extends OrdersV3PaymentActionsRefund>(
    orderId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3PaymentActionsRefundData>> {
    return await http
      .post(`/v3/orders/${orderId}/payment_actions/refunds`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getMany(
    orderId: string,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3PaymentActionsRefundData[]>> {
    return await http
      .get(`/v3/orders/${orderId}/payment_actions/refunds`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    refundId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3PaymentActionsRefundData>> {
    return await http
      .get(`/v3/orders/payment_actions/refunds/${refundId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createRefundQuotes<TData extends OrdersV3PaymentActionsCreateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ErrorResult<OrdersV3PaymentActionsRefundQuote[], OrdersV3Error[]>> {
    return await http
      .post(`/v3/orders/payment_actions/refund_quotes`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: OrdersV3PaymentActionsParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<OrdersV3PaymentActionsRefundData[]>> {
    return await http
      .get('/v3/orders/payment_actions/refunds', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createMany<TData extends OrdersV3PaymentActionsRefund>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ErrorResult<OrdersV3PaymentActionsRefundData[], OrdersV3Error[]>> {
    return await http
      .post('/v3/orders/payment_actions/refunds', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV3PaymentActions()
