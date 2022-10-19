import { Summary } from '../models/summary'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Summaries {
  public async get(
    itemId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Summary>> {
    return await http
      .get(`/v3/catalog/summary`, {
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

export default new Summaries()
