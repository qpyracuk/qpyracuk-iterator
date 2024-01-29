import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  outDir: 'dist',
  treeshake: true,
  minify: true,
  bundle: true,
  dts: true,
  shims: true,
  skipNodeModulesBundle: false,
  clean: true,
  sourcemap: true
});
