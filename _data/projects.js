// Side projects: cards on the home page and the list on the CV page, in this order.
// Mapped from the shared data (see shared.js).
import shared from "./shared.js";

export default async function () {
  const data = await shared();
  return data.projects.map((project) => ({
    name: project.name,
    url: project.url ?? project.page,
    domain: project.url ? new URL(project.url).host : null,
    tagline: project.tagline,
    description: project.summary,
    tech: project.skills,
    badge: project.badge,
    since: project.since,
  }));
}
