import { AbandonedCartTemplateSetting } from '../models/abandoned-cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class AbandonedCartTemplateSettings {
  public async get(
    params: {
      channel_id: number
    },
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartTemplateSetting>> {
    return await http
      .get(`/v3/marketing/abandoned-cart-emails/settings`, {
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

  public async update<TData extends AbandonedCartTemplateSetting>(
    params: {
      channel_id?: number
    } = {},
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartTemplateSetting>> {
    return await http
      .put(`/v3/marketing/abandoned-cart-emails/settings`, {
        ...requestOptions,
        data,
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

export default new AbandonedCartTemplateSettings()
