import { CustomerSettingsPerChannelData, UpdateCustomerSettingsPerChannelData } from '../models/customer'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CustomerSettingsChannels {
  public async get(
    channel_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerSettingsPerChannelData> {
    return await http
      .get(`/v3/customers/settings/channels/${channel_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CustomerSettingsPerChannelData>(
    channel_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<UpdateCustomerSettingsPerChannelData> {
    return await http
      .put(`/v3/customers/settings/channels/${channel_id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerSettingsChannels()
