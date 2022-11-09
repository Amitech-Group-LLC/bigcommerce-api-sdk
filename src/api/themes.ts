import { ThemeData, ThemeUploadData, ThemeUpload } from '../models/theme'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Themes {
  public async list(
    requestOptions: RequestOptions = {}
  ): Promise<Result<ThemeData>> {
    return await http
      .get('/v3/themes', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async upload<TData extends ThemeUploadData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ThemeUpload> {
    return await http
      .post('/v3/themes', { 
        ...requestOptions,
        data,
        headers: { 'Content-Type': 'multipart/form-data' } 
      })
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
  ): Promise<Result<ThemeData>> {
    return await http
      .get(`/v3/themes/${uuid}`, { ...requestOptions })
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
      .delete(`/v3/themes/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}