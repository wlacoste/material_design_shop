import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/material_design_shop/',
  resolve: {
    extensions: ['.js','.mjs']
}
});
