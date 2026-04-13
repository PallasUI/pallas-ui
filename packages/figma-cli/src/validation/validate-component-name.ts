import chalk from 'chalk'
import { getComponentsList } from '../utils/get-components-list.js'

export async function validateComponentName(componentName?: string): Promise<string | undefined> {
  if (componentName === '*') {
    return componentName
  }

  const componentNames = await getComponentsList()

  if (!componentName) {
    listComponents(componentNames)
    return undefined
  }

  if (!componentNames.includes(componentName)) {
    console.log(chalk.red(`Component not found: ${componentName}\n\n`))
    listComponents(componentNames)
    return undefined
  }

  return componentName
}

function listComponents(components: string[]) {
  console.log(chalk.yellowBright('Available components in PallasUI:'))
  console.log(chalk.gray('—'))

  components.forEach((componentName) => {
    console.log(`  ${chalk.cyan(componentName)}`)
  })
}
