import { SystemLogData, SystemLogParam } from '../models/system-log'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SystemLogs {
  public async list(
    params: SystemLogParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SystemLogData[]>> {
    return await http
      .get('/v3/store/systemlogs', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new SystemLogs()
