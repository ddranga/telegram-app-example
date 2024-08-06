import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Output directory for GitHub Pages
  },
  base: '/repo-name/', // Replace 'repo-name' with your GitHub repository name
});
