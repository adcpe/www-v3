<template>
  <div class="min-h-full font-lato flex-1">
    <h1 class="text-3xl font-bold text-center my-10">Blog Posts</h1>
    <div class="w-1/2 m-auto flex flex-col justify-center content-center text-left">
      <template v-for="(post, i) in posts" :key="i">
        <router-link
          :to="{ path: `/blog/${post.slug}` }"
          class="hover:text-links my-2"
        >
          <h1 class="text-xl font-semibold">{{ post.title }}</h1>
          <p>
            <span><b>Posted</b> {{ formatDate(post.publishedOn) }}</span>
            &nbsp;
            <span v-if="post.updatedOn">
              <b>Updated</b> {{ formatDate(post.updatedOn) }}
            </span>
          </p>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import formatDate from '../assets/js/formatDate.js';
import { getAllPosts } from '../assets/js/sanity.js';

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    getAllPosts().then((posts) => (this.posts = posts));

    document.title = `Blog | ${process.env.VUE_APP_TITLE}`;
  },
  methods: {
    formatDate: (date) => formatDate(date),
  },
};
</script>
