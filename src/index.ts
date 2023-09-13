export function C<T>(value: T) {
  return (..._args: any[]) => value;
}
