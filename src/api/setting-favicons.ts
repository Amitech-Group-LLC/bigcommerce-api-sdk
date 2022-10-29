import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SettingFavicons {
  public async create(
    FaviconFile: File,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .post(`/v3/settings/favicon/image`, {
        ...requestOptions,
        data: { FaviconFile },
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new SettingFavicons()
