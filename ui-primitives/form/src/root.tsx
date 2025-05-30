const Root = (props: React.ComponentPropsWithRef<'form'>) => {
  const { children, ref, ...rest } = props

  return (
    <form ref={ref} {...rest}>
      {children}
    </form>
  )
}

export { Root }
