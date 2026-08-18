// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://saiteki-kai.github.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});