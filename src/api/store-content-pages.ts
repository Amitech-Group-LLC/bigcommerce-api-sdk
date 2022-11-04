import { 
  StoreContentBlogPostQueryParam, 
  StoreContentPage, 
  StoreContentPageData, 
  StoreContentUpdateData 
} from '../models/store-content'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class StoreContentPages {
  public async list(
    params: StoreContentBlogPostQueryParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentPage[]> {
    return await http
      .get('/v2/pages', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends StoreContentPageData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentPage> {
    return await http
      .post('/v2/pages', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    id: number,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentPage> {
    return await http
      .get(`/v2/pages/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends StoreContentPageData>(
    id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentUpdateData> {
    return await http
      .put(`/v2/pages/${id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    id: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/pages/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new StoreContentPages()
