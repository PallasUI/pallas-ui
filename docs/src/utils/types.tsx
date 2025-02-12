export type Assign<T, U> = Omit<T, keyof U> & U
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export type WithFixedClassName<T> = Omit<T, 'className'> & {
  className?: string | undefined
}
