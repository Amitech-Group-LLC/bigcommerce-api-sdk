import { ScriptsV3Data, ScriptsV3Result, ScriptsV3Params } from '../models/script-v3'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ScriptsV3 {
  public async create<TData extends ScriptsV3Data>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ScriptsV3Result>> {
    return await http
      .post('/v3/content/scripts', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list<TParams extends ScriptsV3Params>(
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ScriptsV3Result[]>> {
    return await http
      .get('/v3/content/scripts', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    uuid: string,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ScriptsV3Result>> {
    return await http
      .get(`/v3/content/scripts/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ScriptsV3Data>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ScriptsV3Result>> {
    return await http
      .put(`/v3/content/scripts/${uuid}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    uuid: string,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/content/scripts/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ScriptsV3()
