import { ChannelMetafield, ChannelMetafieldPost, ChannelMetafieldPut } from '../models/channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ChannelMetafields {
  public async list(
    channelId: number,
    params: {
      namespace?: string
      page?: number
      direction?: 'asd' | 'desk'
      key?: Array<keyof ChannelMetafield>
      limit?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelMetafield>> {
    return await http
      .get(`/v3/channels/${channelId}/metafields`, {
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

  public async create<TData extends ChannelMetafieldPost>(
    channelId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelMetafield>> {
    return await http
      .post(`/v3/channels/${channelId}/metafields`, {
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
    metafieldId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelMetafield>> {
    return await http
      .get(`/v3/channels/${channelId}/metafields/${metafieldId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ChannelMetafieldPut>(
    channelId: number,
    metafieldId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelMetafield>> {
    return await http
      .put(`/v3/channels/${channelId}/metafields/${metafieldId}`, {
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
    metafieldId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/channels/${channelId}/metafields/${metafieldId}`, {
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

export default new ChannelMetafields()
