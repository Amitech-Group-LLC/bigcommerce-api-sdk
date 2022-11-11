import { StoreContentBlogTagData } from '../models/store-content'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class StoreContentBlogTags {
  public async list(
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentBlogTagData[]> {
    return await http
      .get('/v2/blog/tags', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new StoreContentBlogTags()
