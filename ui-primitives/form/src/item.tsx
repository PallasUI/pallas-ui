import * as React from 'react'

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const Item = ({ children }: { children: React.ReactNode }) => {
  const id = React.useId()

  return <FormItemContext.Provider value={{ id }}>{children}</FormItemContext.Provider>
}

Item.displayName = 'Item'

export { FormItemContext, Item }
