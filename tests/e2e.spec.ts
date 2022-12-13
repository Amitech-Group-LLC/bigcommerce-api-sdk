import { products, config } from '../src/management-api'

describe('e2e tests', () => {
  beforeAll(() => {
    config.set({
      apiToken: process.env.API_TOKEN,
      apiClientId: process.env.API_CLIENT_ID,
      storeHash: process.env.STORE_HASH,
    })
  })

  describe('Products api', () => {
    it('Should return included fields', async () => {
      const product = await products.get(77, { include: ['images', 'custom_fields'] })
      expect(product.data).toHaveProperty('images')
      expect(product.data).toHaveProperty('custom_fields')
    })

    it('Should not return not included fields', async () => {
      try {
        const product = await products.get(77, { include: [] })
        expect(product.data).not.toHaveProperty('images')
        expect(product.data).not.toHaveProperty('custom_fields')
      } catch (e) {
        console.error(e)
      }
    })
  })
})
