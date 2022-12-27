import axios, { AxiosRequestConfig } from 'axios'
import Config from '../config'

type RequestConfig = AxiosRequestConfig & {
  data: { query: string; variables?: Record<string, any> },
  cookie?: string
}

class HttpClient {
  constructor() {
    if (typeof axios === undefined) {
      throw new Error('Missing required peer dependency axios.')
    }
  }

  public request = async (config?: RequestConfig): Promise<any> => {
    return await this.makeApiCall('post', config)
  }

  private async makeApiCall(verb: 'post', config) {
    const requestConfig = await this._buildRequestConfig(config)

    const baseApiUrl = `https://store-${
      Config.get().storeHash
    }.mybigcommerce.com/graphql`
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
        Authorization: `Bearer ${sdkConfig.bearerJWT}`,
        cookie: config?.cookie
      },
    }
  }
}

export default new HttpClient()
