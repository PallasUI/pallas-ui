'use client'

import * as PrimitiveForm from '@pallas-ui/form'
import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { form } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type { HTMLAttributes } from 'react'
import type * as React from 'react'
import type { FieldValues, UseFormReturn } from 'react-hook-form'

const { withProvider, withContext } = createStyleContext(form)

const Root = withProvider<
  React.ComponentRef<typeof PrimitiveForm.Root>,
  Assign<ComponentProps<typeof PrimitiveForm.Root>, JsxStyleProps>
>(PrimitiveForm.Root, 'root')

const Provider = <
  TFielValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFielValues,
>({
  form,
  ...props
}: HTMLAttributes<HTMLFormElement> & {
  form: UseFormReturn<TFielValues, TContext, TTransformedValues>
}) => {
  return (
    <PrimitiveForm.Provider {...form}>
      <Root {...props} />
    </PrimitiveForm.Provider>
  )
}

export const Label = withContext<
  React.ComponentRef<typeof PrimitiveForm.Label>,
  Assign<ComponentProps<typeof PrimitiveForm.Label>, JsxStyleProps>
>(PrimitiveForm.Label, 'label')

export const Description = withContext<
  React.ComponentRef<typeof PrimitiveForm.Description>,
  Assign<ComponentProps<typeof PrimitiveForm.Description>, JsxStyleProps>
>(PrimitiveForm.Description, 'description')

export const Message = withContext<
  React.ComponentRef<typeof PrimitiveForm.Message>,
  Assign<ComponentProps<typeof PrimitiveForm.Message>, JsxStyleProps>
>(PrimitiveForm.Message, 'message')

export const Field = PrimitiveForm.Field

export const Item = PrimitiveForm.Item

export const Control = PrimitiveForm.Control

export const useFormField = PrimitiveForm.useFormField

const Form = {
  Provider,
  Label,
  Description,
  Message,
  Field,
  Item,
  Control,
  useFormField,
}

export default Form
