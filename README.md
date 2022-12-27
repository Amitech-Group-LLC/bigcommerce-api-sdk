# API SDK for BigCommerce

## Using Management API
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

## Using Graphql
```typescript
import { graphqlApi } from '@amitechgrp/bigcommerce-api-sdk'

// setup configuration
graphqlApi.config.set({
  storeHash: 'storeHash',
  bearerJWT: 'jwt token',
})

// run graphql query
const getRouteQuery = /* GraphQL */ `
  query getRoute($urlPath: String!) {
    site {
      route(path: $urlPath) {
        ...
      }
    }
  }
`
graphqlApi.client.request({
  data: {
    query: getStoreNameQuery,
    variables: {
      urlPath: '/category-url'
    },
  },
  cookie: 'SHOP_TOKEN=123'
})
```
