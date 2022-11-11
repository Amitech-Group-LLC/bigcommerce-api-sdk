import { ChannelActiveTheme } from '../models/channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ChannelActiveThemes {
  public async get(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelActiveTheme>> {
    return await http
      .get(`/v3/channels/${channelId}/active-theme`, {
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

export default new ChannelActiveThemes()
