import { defineConfig } from 'vitest/config'

export default defineConfig({
  // tsconfig est en jsx:"preserve" (requis par Next) → on force la transfo JSX
  // côté vitest pour qu'elle reste indépendante du réglage tsconfig.
  esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: false,
  },
})
