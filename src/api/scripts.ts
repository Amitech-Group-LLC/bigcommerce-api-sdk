import { ScriptData, ScriptResult, ScriptParams, ScriptDeleteData } from '../models/script'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Scripts {
  public async create<TData extends ScriptData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ScriptResult>> {
    return await http
      .post('/v3/content/scripts', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: ScriptParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ScriptResult[]>> {
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
  ): Promise<Result<ScriptResult>> {
    return await http
      .get(`/v3/content/scripts/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends ScriptData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ScriptResult>> {
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
  ): Promise<ScriptDeleteData> {
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

export default new Scripts()
