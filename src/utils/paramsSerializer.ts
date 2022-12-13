export const serializeArraysInParams = (params: Record<string, unknown>) => {
  return Object.entries(params).reduce((acc, [key, value]) => {
    const serializedValue = Array.isArray(value) ? value.join(',') : value
    if (!serializedValue) {
      return acc
    }
    return {
      ...acc,
      [key]: serializedValue,
    }
  }, {})
}
