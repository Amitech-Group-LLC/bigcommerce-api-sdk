import { WidgetRegionParam, WidgetRegionData } from '../models/widget'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Regions {
  public async list(
    params: WidgetRegionParam,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetRegionData[]>> {
    return await http
      .get('/v3/content/regions', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Regions()
