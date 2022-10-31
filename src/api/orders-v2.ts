import { OrderData, OrderUpdateData, GetCountOrderData, OrderParams, OrderCreateData } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2 {
  public async get(
    order_id: string,
    requestOptions: RequestOptions = {}
  ): Promise<OrderData> {
    return await http
      .get(`/v2/orders/${order_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends OrderUpdateData>(
    order_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrderData> {
    return await http
      .put(`/v2/orders/${order_id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async archive(
    order_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/orders/${order_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async count(
    requestOptions: RequestOptions = {}
  ): Promise<GetCountOrderData> {
    return await http
      .get('/v2/orders/count', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list<TParams extends OrderParams>(
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<OrderData[]> {
    return await http
      .get('/v2/orders', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends OrderCreateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrderData> {
    return await http
      .post('/v2/orders', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v2/orders', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2()
