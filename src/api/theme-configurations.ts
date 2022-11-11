import { ThemeConfigurationParam, ThemeConfigurationData, ThemeConfigurationValidateData } from '../models/theme'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ThemeConfigurations {
  public async get(
    uuid: string,
    params: ThemeConfigurationParam,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ThemeConfigurationData[]>> {
    return await http
      .get(`/v3/themes/${uuid}/configurations`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async validate<TData extends ThemeConfigurationValidateData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<object> {
    return await http
      .post(`/v3/themes/${uuid}/configurations/validate`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ThemeConfigurations()
