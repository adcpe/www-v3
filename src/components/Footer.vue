<template>
  <footer
    class="font-lato flex flex-row flex-wrap justify-between items-center mx-10 my-6 md:justify-center"
  >
    <div class="flex-grow text-center">
      <a class="hover:text-links" href="mailto:hey@andresdc.net">
        hey@andresdc.net
      </a>
    </div>
    <div class="flex flex-row flex-grow justify-center content-end my-6">
      <a
        v-for="(link, i) in links"
        :key="i"
        :href="link.url"
        :title="link.title"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-2"
      >
        <img class="h-6" :src="link.img" :alt="link.title" />
      </a>
    </div>
  </footer>
</template>

<script>
import links from '@/assets/links.js';

export default {
  data() {
    return {
      links: links,
    };
  },
};
</script>
