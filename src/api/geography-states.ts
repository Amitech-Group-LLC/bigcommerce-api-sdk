import { State, StateFilter, Count } from '../models/geography'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class GeographyStates {
  public async listCountryStates(
    countryId: number,
    params: StateFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<State[]> {
    return await http
      .get(`/v2/countries/${countryId}/states`, {
        ...requestOptions,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getState(
    countryId: number,
    stateId: number,
    requestOptions: RequestOptions = {}
  ): Promise<State> {
    return await http
      .get(`/v2/countries/${countryId}/states/${stateId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getCountState(
    requestOptions: RequestOptions = {}
  ): Promise<Count> {
    return await http
      .get(`/v2/countries/states/count`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async listState(
    requestOptions: RequestOptions = {}
  ): Promise<State[]> {
    return await http
      .get(`/v2/countries/states`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getCountCountryState(
    countryId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Count> {
    return await http
      .get(`/v2/countries/${countryId}/states/count`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new GeographyStates()
