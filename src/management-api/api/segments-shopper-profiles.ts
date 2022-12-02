import { 
  ShopperProfileParam, 
  SegmentShopperProfileData
} from '../models/shopper-profile'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SegmentsShopperProfiles {
  /**
     * @beta functions
     */
  public async list(
    shopperProfileId: string,
    params: ShopperProfileParam,
    requestOptions: RequestOptions = {}
  ):Promise<ListResult<SegmentShopperProfileData[]>>  {
    return await http
      .get(`/v3/shopper-profiles/${shopperProfileId}/segments`, { params, ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new SegmentsShopperProfiles()
