import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/omega-lab-react/', // 👈 تأكد أن هذا هو اسم المستودع بالضبط
})