import {
  AbandonedCartSettingPost,
  AbandonedCartSetting,
} from '../models/abandoned-cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class AbandonedCartsSettings {
  public async updateGlobal<TData extends AbandonedCartSettingPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartSetting>> {
    return await http
      .put(`/v3/abandoned-carts/settings`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartSetting>> {
    return await http
      .get(`/v3/abandoned-carts/settings/channels/${channelId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateChannel<TData extends AbandonedCartSetting>(
    channelId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartSetting>> {
    return await http
      .put(`/v3/abandoned-carts/settings/channels/${channelId}`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new AbandonedCartsSettings()
