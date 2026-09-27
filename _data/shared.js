// Content shared with www.henrikbecker.net, which is the single source for the CV,
// side projects and recommendations. That site publishes /assets/site-data.json;
// this file reads it at build time.
//
// SHARED_DATA overrides the source: a URL, or a local path such as
// ../handiman.github.io/_site/assets/site-data.json when working on both sites.
import fs from "node:fs";
import Fetch from "@11ty/eleventy-fetch";

// The Pages hostname, not www.henrikbecker.net: the custom domain sits behind the zone's
// bot protection, which answers GitHub Actions runners with 403.
const DEFAULT_SOURCE = "https://henrikbecker.pages.dev/assets/site-data.json";
const SUPPORTED_VERSION = 1;

export default async function () {
  const source = process.env.SHARED_DATA || DEFAULT_SOURCE;
  const data = /^https?:\/\//.test(source)
    ? await Fetch(source, {
        duration: process.env.CI ? "0s" : "1h",
        type: "json",
        fetchOptions: { headers: { "user-agent": "becker-consulting.se build (+https://www.becker-consulting.se)" } },
      })
    : JSON.parse(fs.readFileSync(source, "utf8"));

  if (data.version !== SUPPORTED_VERSION) {
    throw new Error(`shared data from ${source} has version ${data.version}; expected ${SUPPORTED_VERSION}`);
  }
  return data;
}
