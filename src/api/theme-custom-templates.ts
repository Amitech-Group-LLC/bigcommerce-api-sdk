import { ThemeCustomTemplateData } from '../models/theme'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ThemeCustomTemplates {
  public async get(
    versionUuid: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ThemeCustomTemplateData>> {
    return await http
      .get(`/v3/themes/custom-templates/${versionUuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ThemeCustomTemplates()
