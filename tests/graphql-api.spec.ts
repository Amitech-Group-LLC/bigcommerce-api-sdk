import mockAxios from 'axios'
import { config } from '../src/graphql-api'
import http from '../src/graphql-api/utils/http-clients'

describe('GraphQL api', () => {
  it('Get', async () => {
    const configParams = {
      storeHash: 'hash',
      bearerJWT: 'token', 
      apiClientId: 'clientId',
    }

    config.set(configParams)
    await http.request({ data: {} })

    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(mockAxios.post).toHaveBeenCalledWith(`https://store-hash.mybigcommerce.com/graphql`, {
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
