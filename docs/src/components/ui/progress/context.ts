import { type SVGProps, createContext, useContext } from 'react'

export type ProgressContextType = {
  width: number
  height: number
  strokeWidth: number
  strokeLinecap: SVGProps<SVGLineElement>['strokeLinecap']
  steps: number
  stepToGapRatio: number
}

export const ProgressContext = createContext<ProgressContextType | null>(null)

export const useProgressContext = () => {
  const values = useContext(ProgressContext)
  if (!values)
    throw new Error(
      'useProgressContext can only be called inside <ProgressContext.Provider></ProgressContext.Provider>',
    )
  return values
}
