import { WebhookAdmin } from '../models/webhook'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class WebhookAdmins {
  public async get(
    params: {
      is_active?: boolean,
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WebhookAdmin>> {
    return await http
      .get(`/v3/hooks/admin`, {
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

  public async upsert(
    params: {
      emails?: string[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .put(`/v3/hooks/admin`, {
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

export default new WebhookAdmins()
