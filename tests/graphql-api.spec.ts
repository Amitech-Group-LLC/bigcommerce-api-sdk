import mockAxios from 'axios'
import { products, config } from '../src/graphql-api'

describe('GraphQL api', () => {
  it('Get', async () => {
    const configParams = {
      storeHash: '80nb9ltj6u',
      bearerJWT: 'token', 
      apiClientId: 'clientId',
    }

    config.set(configParams)
    await products.get({})

    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(mockAxios.post).toHaveBeenCalledWith(`https://store-${configParams.storeHash}.mybigcommerce.com/graphql`, {
      data: {},
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${configParams.bearerJWT}`,
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
