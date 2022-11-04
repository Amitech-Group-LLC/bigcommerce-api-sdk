import { 
  StoreContentBlogPostParam, 
  StoreContentBlogPostData, 
  StoreContentBlogPostCreateParam, 
  StoreContentBlogPostCreateData, 
  StoreContentBlogPostQueryParam, 
  StoreContentCountData 
} from '../models/store-content'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class StoreContentBlogPosts {
  public async list(
    params: StoreContentBlogPostParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentBlogPostData[]>  {
    return await http
      .get('/v2/blog/posts', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends StoreContentBlogPostCreateParam>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentBlogPostCreateData> {
    return await http
      .post('/v2/blog/posts', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: StoreContentBlogPostQueryParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v2/blog/posts', { ...requestOptions, params })
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
  ): Promise<StoreContentBlogPostData> {
    return await http
      .get(`/v2/blog/posts/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends StoreContentBlogPostCreateParam>(
    id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentBlogPostCreateData> {
    return await http
      .put(`/v2/blog/posts/${id}`, { ...requestOptions, data })
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
      .delete(`/v2/blog/posts/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getCount(
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentCountData> {
    return await http
      .get('/v2/blog/posts/count', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new StoreContentBlogPosts()
