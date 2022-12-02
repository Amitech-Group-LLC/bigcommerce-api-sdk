import mockAxios from 'axios'
import { carts, config, CartInclude } from '../src/management-api'

describe('Carts api', () => {
  it('Get cart', async () => {
    const configParams = {
      storeHash: 'storeHash',
      apiToken: 'token',
      apiClientId: 'clientId',
    }
    config.set(configParams)
    await carts.get('111', CartInclude.DigitalItemsOptions)

    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(`https://api.bigcommerce.com/stores/${configParams.storeHash}/v3/carts/111`, {
      params: {
        include: CartInclude.DigitalItemsOptions,
      },
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': configParams.apiToken,
        'X-Auth-Client': configParams.apiClientId,
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
