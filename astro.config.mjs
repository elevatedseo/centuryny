import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://centuryny.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
