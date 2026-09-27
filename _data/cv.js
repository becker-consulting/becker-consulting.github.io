// Content of the short CV page (/cv/), mapped from the shared data (see shared.js).
import shared from "./shared.js";

// The company itself is listed as an assignment on henrikbecker.net; not here.
const OWN_COMPANY = "henrik-becker-consulting-ab";

export default async function () {
  const data = await shared();
  return {
    name: data.person.name,
    title: data.person.jobTitle,
    summary: data.summary,
    downloads: data.downloads,
    experience: data.experience
      .filter((job) => job.organizationId !== OWN_COMPANY)
      .map((job) => ({
        years: job.years.replace("present", "now"),
        name: job.name,
        role: job.roles.join(", "),
        summary: job.descriptionHtml,
        highlight: job.keyHighlight,
        tech: job.skills.slice(0, 5).join(" · "),
      })),
    earlier: {
      years: data.earlier.years,
      text: data.earlier.names.filter((name, i, all) => all.indexOf(name) === i).slice(0, 6).join(", "),
    },
    core: data.coreSkills.map((item) => (item.skills.length ? `${item.name} — ${item.skills.join(", ")}` : item.name)),
    certifications: data.certifications.map(({ name, issuer, year }) => ({ name, issuer, year })),
    languages: data.languages.map((language) => `${language.name} — ${language.proficiency}`),
    recommendations: data.recommendations,
  };
}
