<template>
  <div class="flex flex-row flex-wrap justify-center my-8">
    <img
      v-for="(logo, i) in logos"
      :key="i"
      :src="logo.img"
      :alt="logo.title"
      :title="logo.title"
      class="h-10 m-4"
    />
  </div>
</template>

<script>
import logos from '@/assets/logos.js';

export default {
  data() {
    return {
      logos: logos,
    };
  },
};
</script>
