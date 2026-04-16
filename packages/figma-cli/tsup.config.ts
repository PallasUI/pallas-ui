import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  sourcemap: true,
  format: ['esm'],
  banner: { js: '#!/usr/bin/env node' },
  // ts-morph: includes the TypeScript compiler (~30MB) — must be resolved from node_modules at runtime.
  // @vue/compiler-sfc & lightningcss: transitive deps with native/bundling issues.
  // All are listed in `dependencies` so they're available at runtime.
  external: [/ts-morph/, /@vue\/compiler-sfc/, /lightningcss/],
})
