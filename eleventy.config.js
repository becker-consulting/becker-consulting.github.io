import markdownItAnchor from "markdown-it-anchor";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

const FAVICON_SIZES = [512, 192, 180, 64, 32, 16];

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // Headings get ids so the "On this page" list can link to them.
  eleventyConfig.amendLibrary("md", (md) =>
    md.use(markdownItAnchor, { level: [2, 3], tabIndex: false })
  );

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("ads.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CLAUDE.md");
  eleventyConfig.ignores.add(".github/**");
  eleventyConfig.ignores.add(".claude/**");

  eleventyConfig.addGlobalData("favicon_sizes", FAVICON_SIZES);
  eleventyConfig.addGlobalData("build_year", new Date().getFullYear());

  // Builds the "On this page" list from the rendered <h2 id="…"> headings.
  eleventyConfig.addFilter("toc", (html = "") =>
    [...String(html).matchAll(/<h2[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map(
      ([, id, text]) => ({ id, text: text.replace(/<[^>]+>/g, "").trim() })
    )
  );

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["liquid", "md", "html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
