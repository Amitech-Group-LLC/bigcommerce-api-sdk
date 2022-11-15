import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class TimeZones {
  public async getSystemTimestamp(
    requestOptions: RequestOptions = {}
  ): Promise<{ time: number }> {
    return await http
      .get(`/v2/time`, {
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

export default new TimeZones()
