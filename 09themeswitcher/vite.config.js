import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  tailwind: { // Correct placement for Tailwind config
    config: {
      darkMode: 'class', // Correctly nested within config
    },
  },
});