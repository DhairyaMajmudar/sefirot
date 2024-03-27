export function isNullish(value: unknown): value is undefined | null {
  return value == null
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

export function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !isArray(value)
}

export function isFile(value: unknown): value is File {
  return value instanceof File
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function'
}
