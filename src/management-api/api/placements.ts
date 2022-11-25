import { PlacementData, PlacementCreateData, PlacementParam, PlacementUpdateData } from '../models/widget'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Placements {
  public async create<TData extends PlacementCreateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<PlacementData>> {
    return await http
      .post('/v3/content/placements', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: PlacementParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<PlacementData[]>> {
    return await http
      .get('/v3/content/placements', { ...requestOptions, params })
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
  ): Promise<Result<PlacementData>> {
    return await http
      .get(`/v3/content/placements/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends PlacementUpdateData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<PlacementData>> {
    return await http
      .put(`/v3/content/placements/${uuid}`, { ...requestOptions, data })
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
      .delete(`/v3/content/placements/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Placements()
