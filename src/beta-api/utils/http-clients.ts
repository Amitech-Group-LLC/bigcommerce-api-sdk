import axios, { AxiosRequestConfig } from 'axios'
import Config from '../config'

type RequestConfig = AxiosRequestConfig

class HttpClient {
  constructor() {
    if (typeof axios === undefined) {
      throw new Error('Missing required peer dependency axios.')
    }
  }

  public get = async (path: string, config?: RequestConfig): Promise<any> => {
    return await this.makeApiCall('get', path, config)
  }

  public post = async (path: string, config?: RequestConfig): Promise<any> => {
    return await this.makeApiCall('post', path, config)
  }

  public put = async (path: string, config?: RequestConfig): Promise<any> => {
    return await this.makeApiCall('put', path, config)
  }

  public patch = async (path: string, config?: RequestConfig): Promise<any> => {
    return await this.makeApiCall('patch', path, config)
  }

  public delete = async (path: string, config: RequestConfig) => {
    return await this.makeApiCall('delete', path, config)
  }

  private async makeApiCall(
    verb: 'get' | 'put' | 'post' | 'patch' | 'delete',
    path,
    config
  ) {
    const requestConfig = await this._buildRequestConfig(config)
    const baseApiUrl = `https://api.bigcommerce.com/stores/${
      Config.get().storeHash
    }${path}`
    if (verb === 'put' || verb === 'post' || verb === 'patch') {
      const requestBody = requestConfig.data
      delete requestConfig.data
      const response = await axios[verb as string](
        baseApiUrl,
        requestBody,
        requestConfig
      )
      return response.data
    } else {
      const response = await axios[verb as string](baseApiUrl, requestConfig)
      return response.data
    }
  }

  private async _buildRequestConfig(  
    config?: RequestConfig
  ): Promise<RequestConfig> {
    const sdkConfig = Config.get()
    return {
      ...config,
      timeout: sdkConfig.timeoutInMilliseconds,
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': sdkConfig.apiToken,
        'Accept': 'application/json'
      },
    }
  }
}

export default new HttpClient()
