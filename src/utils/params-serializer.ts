const paramSerializer = (originalParams: {
  [key: string]: any
}): string => {
  const params = JSON.parse(JSON.stringify(originalParams)) // don't mutate original object
  const valuesArray: string[] = []

  // serialize the rest of the params
  for (const key in params) {
    const val = params[key]
    if (val) {
      valuesArray.push(`${key}=${encodeURIComponent(val)}`)
    }
  }

  return valuesArray.length ? `${valuesArray.join('&')}` : ''
}

export default paramSerializer
