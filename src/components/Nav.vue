<template>
  <nav class="flex flex-row justify-between items-center mx-10 my-8">
    <div class="nav-left">
      <router-link
        to="/"
        class="select-none tracking-wider font-titillium font-semibold text-6xl hover:text-links"
      >
        ADC
      </router-link>
    </div>

    <div class="nav-right font-normal text-2xl">
      <router-link to="/blog" class="hover:text-links">Blog</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
