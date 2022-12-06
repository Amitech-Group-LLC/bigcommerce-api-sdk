import { SdkConfig } from './models/sdk-config'

class Config {
  private defaultConfig: SdkConfig = {
    storeHash: '',
    apiToken: '',
    apiClientId: '',
    timeoutInMilliseconds: 60000,
  }
  private config = { ...this.defaultConfig }

  set = (config: SdkConfig) => {
    this.config = {
      ...this.defaultConfig,
      ...config,
    }
  }

  get = (): SdkConfig => {
    return this.config
  }
}

export default new Config()
