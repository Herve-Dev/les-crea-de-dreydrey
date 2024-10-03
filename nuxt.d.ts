import { CarouselOptions } from 'vue3-carousel-nuxt';

declare module 'nuxt' {
  interface NuxtConfig {
    carousel?: CarouselOptions;
  }
}