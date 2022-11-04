import { ChannelMenu } from '../models/channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ChannelMenus {
  public async get(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelMenu>> {
    return await http
      .get(`/v3/channels/${channelId}/channel-menus`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ChannelMenu>(
    channelId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelMenu>> {
    return await http
      .post(`/v3/channels/${channelId}/channel-menus`, {
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

  public async delete(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<number>> {
    return await http
      .delete(`/v3/channels/${channelId}/channel-menus`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ChannelMenus()
