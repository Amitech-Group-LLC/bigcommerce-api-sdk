import { OrdersV3SettingData, OrdersV3SettingParams } from '../models/orders-v3'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Settings {
  public async getGlobal(
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3SettingData> {
    return await http
      .get('/v3/orders/settings', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async updateGlobal<TData extends OrdersV3SettingParams>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3SettingData> {
    return await http
      .put('/v3/orders/settings', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async getChannel(
    channel_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3SettingData> {
    return await http
      .get(`/v3/orders/settings/channels/${channel_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }

  public async updateChannel<TData extends OrdersV3SettingParams>(
    channel_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3SettingData> {
    return await http
      .put(`/v3/orders/settings/channels/${channel_id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }
}

export default new OrdersV3Settings()
