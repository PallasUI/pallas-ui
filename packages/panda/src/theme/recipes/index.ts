import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev'

import { accordion } from './accordion'
import { alert, alertDescription, alertTitle } from './alert'
import { avatar } from './avatar'
import { badge } from './badge'
import { breadcrumb } from './breadcrumb'
import { button } from './button'
import { card } from './card'
import { carousel } from './carousel'
import { checkbox } from './checkbox'
import { combobox } from './combobox'
import { command } from './command'
import { daypicker } from './daypicker'
import { dialog } from './dialog'
import { drawer } from './drawer'
import { form } from './form'
import { heading } from './heading'
import { icon } from './icon'
import { input } from './input'
import { inputOTP } from './input-otp'
import { label } from './label'
import { menubar } from './menu-bar'
import { modal } from './modal'
import { paragraph } from './paragraph'
import { popover } from './popover'
import { progress } from './progress'
import { radioGroup } from './radio-group'
import { segmented } from './segmented'
import { select } from './select'
import { scrollArea } from './scroll-area'
import { separator } from './separator'
import { sheet } from './sheet'
import { sidebar } from './sidebar'
import { skeleton } from './skeleton'
import { slider } from './slider'
import { spinner } from './spinner'
import { steps } from './steps'
import { switchRecipe } from './switch'
import { table } from './table'
import { tabs } from './tabs'
import { textarea } from './textarea'
import { toast } from './toast'
import { tooltip } from './tooltip'
import { treeView } from './tree-view'

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  icon,
  button,
  alert,
  alertDescription,
  alertTitle,
  paragraph,
  heading,
  badge,
  label,
  textarea,
  spinner,
  separator,
  skeleton,
}

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  accordion,
  avatar,
  breadcrumb,
  card,
  carousel,
  checkbox,
  command,
  combobox,
  drawer,
  daypicker,
  input,
  inputOTP,
  modal,
  dialog,
  menubar,
  progress,
  popover,
  radioGroup,
  segmented,
  select,
  scrollArea,
  sheet,
  slider,
  steps,
  switchRecipe,
  table,
  tabs,
  toast,
  tooltip,
  treeView,
  sidebar,
  form,
}
