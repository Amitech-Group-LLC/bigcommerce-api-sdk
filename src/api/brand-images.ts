import { BrandImage } from '../models/brand'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class BrandImages {
  public async create(
    brand_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandImage>> {
    return await http
      .post(`/v3/catalog/brands/${brand_id}/image`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    brand_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/brands/${brand_id}/image`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new BrandImages()
