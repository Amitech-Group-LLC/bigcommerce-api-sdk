import { CustomerSettingsPerChannelData } from '../models/customer-settings-per-channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerSettingsPerChannel {
  public async get(
    channel_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerSettingsPerChannelData>> {
    return await http
      .get(`/v3/customers/settings/channels/${channel_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerSettingsPerChannel()