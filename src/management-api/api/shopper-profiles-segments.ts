import { 
  ShopperProfileParam, 
  ShopperProfileData, 
  ShopperProfileDeleteParam 
} from '../models/shopper-profile'
import { ListResult, DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ShopperProfilesSegments {
  /**
   * @beta functions
   */
  public async list(
    segmentId: string,
    params: ShopperProfileParam = {},
    requestOptions: RequestOptions = {}
  ):Promise<ListResult<ShopperProfileData[]>> {
    return await http
      .get(`/v3/segments/${segmentId}/shopper-profiles`, { params, ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  /**
   * @beta functions
   */
  public async add(
    segmentId: string,
    data: string[],
    requestOptions: RequestOptions = {}
  ):Promise<DataResult<ShopperProfileData[]>> {
    return await http
      .post(`/v3/segments/${segmentId}/shopper-profiles`, { data, ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

    /**
   * @beta functions
   */
  public async remove(
    segmentId: string,
    params: ShopperProfileDeleteParam = {},
    requestOptions: RequestOptions = {}
  ):Promise<undefined> {
    return await http
      .delete(`/v3/segments/${segmentId}/shopper-profiles`, { params, ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ShopperProfilesSegments()
