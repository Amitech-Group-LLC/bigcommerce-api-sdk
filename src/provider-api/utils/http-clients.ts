import axios, { AxiosRequestConfig } from 'axios'
import Config from '../config'

type RequestConfig = AxiosRequestConfig

class HttpClient {
  constructor() {
    if (typeof axios === undefined) {
      throw new Error('Missing required peer dependency axios.')
    }
  }

  public post = async (path: string, config?: RequestConfig): Promise<any> => {
    return await this.makeApiCall('post', path, config)
  }

  private async makeApiCall(
    verb: 'post',
    path,
    config
  ) {
    const requestConfig = await this._buildRequestConfig(config)
    const baseApiUrl = `https://store-${Config.get().storeHash}.mybigcommerce.com/${path}`
    if (verb === 'post') {
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
