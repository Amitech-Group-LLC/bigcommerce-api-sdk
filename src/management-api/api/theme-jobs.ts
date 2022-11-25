import { ThemeJobData } from '../models/theme'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ThemeJobs {
  public async get(
    jobId: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ThemeJobData>> {
    return await http
      .get(`/v3/themes/jobs/${jobId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ThemeJobs()
