export function parseBooleanString(value: string): boolean {
  return value ? JSON.parse(value) : false;
}
