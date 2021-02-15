<template>
  <div class="post">
    <h1 id="postTitle">{{ title }}</h1>
    <p>
      <b>Posted</b> {{ publishedOn }}
      <span v-if="updatedOn"> <b>Updated</b> {{ updatedOn }} </span>
    </p>
    <div class="md" v-html="body" />
  </div>
</template>

<script>
import renderMD from '../assets/js/md.js';
import prism from '../assets/js/prism.js';
import formatDate from '../assets/js/formatDate.js';
import { getSinglePost } from '../assets/js/sanity.js';

export default {
  data() {
    return {
      post: {},
      title: '',
      publishedOn: '',
      updatedOn: '',
      body: '',
    };
  },
  async mounted() {
    await getSinglePost(this.$route.params.slug).then((post) => {
      this.title = post.title;
      this.publishedOn = formatDate(post.publishedOn);
      this.updatedOn = post.updatedOn ? formatDate(post.updatedOn) : null;
      this.body = renderMD(post.body);
    });

    document.title = `${this.title} | ${process.env.VUE_APP_TITLE}`;
    
    prism();
  },
  methods: {
    formatDate: (date) => formatDate(date),
  },
};
</script>

<style lang="scss">
.post {
  @apply lg:w-1/2 my-2 lg:mx-auto mx-4 text-base;

  & > h1,
  & > p {
    @apply text-center my-2 mx-auto;
  }

  & > h1 {
    @apply font-bold text-5xl;
  }

  & > p {
    @apply text-sm;
  }

  a {
    @apply text-blue-500;

    &:hover {
      @apply text-links;
    }
  }

  .md {
    @apply text-left;

    * {
      @apply my-4 mx-auto;
    }

    h1 {
      @apply text-5xl;
    }

    h2 {
      @apply text-4xl;
    }

    h3 {
      @apply text-3xl;
    }

    h4 {
      @apply text-2xl;
    }

    h5 {
      @apply text-xl;
    }

    h6 {
      @apply text-lg;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply font-bold;
    }

    pre {
      @apply w-11/12;
    }
  }
}
</style>
