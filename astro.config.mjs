import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

//import sanity from "astro-sanity";

// https://astro.build/config

// https://astro.build/config
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    tailwind(), 
    sanity({
      projectId: 'fhveocoz',
      dataset: 'production',
      //apiVersion: '2023-02-08',
      useCdn: false,
      studioBasePath: "/admin",
    }), 
    react()
  ]
});