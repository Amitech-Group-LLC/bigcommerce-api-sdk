import { 
  SegmentQueryParam, 
  SegmentData, 
  SegmentCreateData, 
  SegmentUpdateData, 
  SegmentDeleteParam 
} from '../models/segment'
import { ListResult, Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Segments {
  /**
   * @beta functions
   */
  public async list(
    params: SegmentQueryParam = {},
    requestOptions: RequestOptions = {}
  ):Promise<ListResult<SegmentData[]>> {
    return await http
      .get('/v3/segments', { params, ...requestOptions })
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
  public async create<TData extends SegmentCreateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ):Promise<Result<SegmentData[]>> {
    return await http
      .post('/v3/segments', { data, ...requestOptions })
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
  public async update<TData extends SegmentUpdateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ):Promise<Result<SegmentData[]>> {
    return await http
      .put('/v3/segments', { data, ...requestOptions })
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
    params: SegmentDeleteParam = {},
    requestOptions: RequestOptions = {}
  ):Promise<undefined> {
    return await http
      .delete('/v3/segments', { params, ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Segments()
