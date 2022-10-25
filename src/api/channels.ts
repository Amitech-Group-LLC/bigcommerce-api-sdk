import { ChannelFilter, Channel, ChannelPost } from '../models/channel'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Channels {
  public async list(
    filterParams: ChannelFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Channel[]>> {
    return await http
      .get(`/v3/channels`, {
        ...requestOptions,
        params: filterParams,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ChannelPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Channel>> {
    return await http
      .post(`/v3/channels`, {
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
    params: {
        include?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Channel>> {
    return await http
      .get(`/v3/channels/${channelId}`, {
        ...requestOptions,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async put(
    channelId: number,
    params: {
        include?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Channel>> {
    return await http
      .put(`/v3/channels/${channelId}`, {
        ...requestOptions,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Channels()
