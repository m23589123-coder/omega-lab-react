import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // تم حذف سطر base بالكامل لأن Vercel لا يحتاجه
})