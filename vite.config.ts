import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' = déployable sous n'importe quel chemin. React Compiler = mémoïsation auto.
export default defineConfig({
  plugins: [react({ babel: { plugins: [['babel-plugin-react-compiler', {}]] } })],
  base: './',
})
