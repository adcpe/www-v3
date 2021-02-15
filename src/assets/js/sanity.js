import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.VUE_APP_SANITY_ID,
  token: process.env.VUE_APP_SANITY_TOKEN,
  dataset: 'production',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

async function getAllPosts() {
  const query = `*[_type == 'post' && isPublished == true] {title, 'slug': slug.current, publishedOn, updatedOn} | order(publishedOn desc)`;

  return await client.fetch(query);
}

async function getSinglePost(slug) {
  const params = { slug: slug };
  const query = `*[_type == 'post' && slug.current == $slug]{ title, body, publishedOn, updatedOn, 'slug': slug.current }[0]`;

  return await client.fetch(query, params);
}

export { getAllPosts, getSinglePost };
