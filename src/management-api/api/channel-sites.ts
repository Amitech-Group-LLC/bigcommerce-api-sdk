import { ChannelSite } from '../models/channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ChannelSites {
  public async get(
    channelId: number,
    requestOptions: RequestOptions = {},
  ): Promise<Result<ChannelSite>> {
    return await http
      .get(`/v3/channels/${channelId}/site`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create(
    channelId: number,
    data: {
      url?: string
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelSite>> {
    return await http
      .post(`/v3/channels/${channelId}/site`, {
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

  public async update(
    channelId: number,
    data: {
      url?: string,
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelSite>> {
    return await http
      .put(`/v3/channels/${channelId}/site`, {
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
  ): Promise<object> {
    return await http
      .delete(`/v3/channels/${channelId}/site`, {
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

export default new ChannelSites()
