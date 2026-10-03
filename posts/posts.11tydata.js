// Blog posts: posts/YYYY-MM-DD-slug.md, published at /en/blog/slug/ (Eleventy's
// fileSlug drops the date prefix). English only. Moved here from
// www.henrikbecker.net/blog/, which redirects to these URLs.
export default {
  layout: "post.liquid",
  tags: ["posts"],
  lang: "en",
  permalink: (data) => `/en/blog/${data.page.fileSlug}/`,
};
