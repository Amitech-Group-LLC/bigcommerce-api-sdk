import { CartSetting } from '../models/cart-setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CartSettings {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<Result<CartSetting>> {
    return await http
      .get(`/v3/carts/settings`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CartSetting>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CartSetting>> {
    return await http
      .put(`/v3/carts/settings`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getForChannel(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CartSetting>> {
    return await http
      .get(`/v3/carts/settings`, { ...requestOptions, params: { channel_id: channelId } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateForChannel<TData extends CartSetting>(
    channelId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CartSetting>> {
    return await http
      .put(`/v3/carts/settings`, { ...requestOptions, data, params: { channel_id: channelId } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CartSettings()
