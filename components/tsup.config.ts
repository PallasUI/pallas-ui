import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/ui'],
  format: ['esm', 'cjs'],
  dts: false,
  experimentalDts: false,
  bundle: false,
  minify: 'terser',
  keepNames: true,
  target: ['chrome138', 'firefox141', 'safari18'],
  esbuildOptions: (opts) => {
    opts.resolveExtensions = ['.tsx', '.ts', '.jsx', '.js', '.mjs']

    return opts
  },
})
