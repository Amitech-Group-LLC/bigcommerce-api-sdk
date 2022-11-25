import { ThemeUpload, ThemeActionData, ThemeActionActivateData } from '../models/theme'
import { ScriptDeleteData } from '../models/script'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ThemeActions {
  public async download<TData extends ThemeActionData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ThemeUpload> {
    return await http
      .post(`/v3/themes/${uuid}/actions/download`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async activate<TData extends ThemeActionActivateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ScriptDeleteData> {
    return await http
      .post('/v3/themes/actions/activate', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ThemeActions()
