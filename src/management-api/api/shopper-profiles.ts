import { 
  ShopperProfileParam, 
  ShopperProfileData, 
  ShopperProfileCreateData, 
  ShopperProfileDeleteParam 
} from '../models/shopper-profile'
import { ListResult, Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ShopperProfiles {
  /**
   * @beta functions
   */
  public async list(
    params: ShopperProfileParam = {},
    requestOptions: RequestOptions = {}
  ):Promise<ListResult<ShopperProfileData[]>> {
    return await http
      .get('/v3/shopper-profiles', { params, ...requestOptions })
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
  public async create<TData extends ShopperProfileCreateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ):Promise<Result<ShopperProfileData[]>> {
    return await http
      .post('/v3/shopper-profiles', { data, ...requestOptions })
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
  public async delete(
    params: ShopperProfileDeleteParam = {},
    requestOptions: RequestOptions = {}
  ):Promise<undefined> {
    return await http
      .delete('/v3/shopper-profiles', { params, ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ShopperProfiles()
