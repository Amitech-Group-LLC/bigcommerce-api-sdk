import { config, client } from '../src/graphql-api'

const query = /* GraphQL */ `
  query getStoreName {
    site {
      settings {
        storeName
      }
    }
  }
`

describe('e2e tests', () => {
  beforeAll(() => {
    config.set({
      bearerJWT: process.env.GRAPHQL_TOKEN,
      storeHash: process.env.STORE_HASH,
    })
  })

  describe('Products api', () => {
    it('Should return included fields', async () => {
      try {
        const result = await client.request({
          data: {
            query,
          },
        })
        expect(result.data).toBeDefined()
      } catch (e) {
        console.error(e, e.response.data)
        throw Error('Unable to request graphql')
      }
    })
  })
})
