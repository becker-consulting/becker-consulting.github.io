// Content shared with www.henrikbecker.net, which is the single source for the CV,
// side projects, services and the About text. That site publishes the same data in
// two languages, /assets/site-data.json (English) and /sv/assets/site-data.json
// (Swedish); this file reads both at build time and returns { en, sv }.
//
// SHARED_DATA overrides the source of the English file: a URL, or a local path such as
// ../handiman.github.io/_site/assets/site-data.json when working on both sites.
// The Swedish file is found next to it, under /sv/.
import fs from "node:fs";
import Fetch from "@11ty/eleventy-fetch";

// The Pages hostname, not www.henrikbecker.net: the custom domain sits behind the zone's
// bot protection, which answers GitHub Actions runners with 403.
const DEFAULT_SOURCE = "https://henrikbecker.pages.dev/assets/site-data.json";
const SUPPORTED_VERSION = 1;

const swedish = (source) => source.replace(/([\\/])assets([\\/])site-data\.json$/, "$1sv$1assets$2site-data.json");

const load = async (source) => {
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
};

export default async function () {
  const source = process.env.SHARED_DATA || DEFAULT_SOURCE;
  const [en, sv] = await Promise.all([load(source), load(swedish(source))]);
  return { en, sv };
}
