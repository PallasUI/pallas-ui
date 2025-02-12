import { dirname, join } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  // add stories from nested folders as well
  stories: ['../src/stories/**/*.tsx', '../src/stories/**/*.mdx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, controls: false, actions: false },
    },
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-controls'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: './' })],
    })
  },
}

export default config

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}
