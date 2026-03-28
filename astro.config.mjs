// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/entrypoint' })],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } }
});