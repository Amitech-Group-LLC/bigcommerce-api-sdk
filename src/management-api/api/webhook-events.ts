import { WebhookEventFilter, WebhookEvent } from '../models/webhook'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class WebhookEvents {
  public async list(
    params: WebhookEventFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WebhookEvent>> {
    return await http
      .get(`/v3/hooks/events`, {
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

export default new WebhookEvents()
