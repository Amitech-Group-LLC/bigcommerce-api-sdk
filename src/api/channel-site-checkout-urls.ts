import { ChannelSite } from '../models/channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ChannelSiteCheckoutUrls {
  public async upsert(
    channelId: number,
    params: {
      url?: string,
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelSite>> {
    return await http
      .put(`/v3/channels/${channelId}/site/checkout-url`, {
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

  public async delete(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/channels/${channelId}/site/checkout-url`, {
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

export default new ChannelSiteCheckoutUrls()
