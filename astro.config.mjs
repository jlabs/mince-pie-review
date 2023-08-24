import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: 'fhveocoz',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  })]
});