import mockAxios from 'axios'
import { formFields, config } from '../src/storefront-api'

describe('Form Fields api', () => {
  it('Get form-field', async () => {
    const configParams = {
      storeHash: '80nb9ltj6u',
    }
    config.set(configParams)
    await formFields.get({filter: 'billingAddress'})
  

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