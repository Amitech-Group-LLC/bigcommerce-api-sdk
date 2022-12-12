# API SDK for BigCommerce

## Getting started
```typescript
import { config, products } from '@amitechgrp/bigcommerce-api-sdk'

// setup configuration
config.set({
  storeHash: 'storeHash',
  apiClientId: 'clientId',
  apiToken: 'apiToken',
})

// getting product name
const getProductName = async (id: number) => {
  const product = await products.get(id)
  
  return product?.name
}
```
