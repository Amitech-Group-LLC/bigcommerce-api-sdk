import { ChannelListingFilter, ChannelListing, ChannelListingPost, ChannelListingPut } from '../models/channel'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ChannelListings {
  public async list(
    channelId: number,
    filterParams: ChannelListingFilter = {},
    requestOptions: RequestOptions = {},
  ): Promise<ListResult<ChannelListing[]>> {
    return await http
      .get(`/v3/channels/${channelId}/listings`, {
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

  public async createMany<TData extends ChannelListingPost>(
    channelId: number,
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ChannelListing[]>> {
    return await http
      .post(`/v3/channels/${channelId}/listings`, {
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

  public async updateMany<TData extends ChannelListingPut>(
    data: TData[],
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ChannelListing[]>> {
    return await http
      .put(`/v3/channels/${channelId}/listings`, {
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
    listingId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelListing>> {
    return await http
      .get(`/v3/channels/${channelId}/listings/${listingId}`, {
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

export default new ChannelListings()
