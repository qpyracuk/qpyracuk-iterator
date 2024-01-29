import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  outDir: 'dist',
  treeshake: true,
  minify: true,
  bundle: false,
  dts: true,
  shims: true,
  skipNodeModulesBundle: false,
  clean: true,
  sourcemap: true
});
