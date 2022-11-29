import mockAxios from 'axios'
import { config } from '../src/storefront-api'
import http from '../src/storefront-api/utils/http-clients'

describe('Storefront api', () => {
  it('Get Storefront', async () => {
    const configParams = {
      storeHash: 'storeHash',
    }
    config.set(configParams)
    await http.get('api/storefront/form-fields', {params: {filter: 'billingAddress'}})
  

    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(`https://store-${configParams.storeHash}.mybigcommerce.com/api/storefront/form-fields`, {
      params: {
        filter: 'billingAddress'
      },
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})