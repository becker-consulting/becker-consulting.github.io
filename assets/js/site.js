// Turns [data-email="user|domain"] links into mailto: links. The address
// only exists in the page as separate parts, which keeps most scrapers out.
(() => {
  document.querySelectorAll("[data-email]").forEach((link) => {
    const [user, domain] = link.dataset.email.split("|");
    if (!user || !domain) return;
    const address = `${user}@${domain}`;
    link.href = `mailto:${address}`;
    if (link.hasAttribute("data-email-text")) link.textContent = address;
  });

  // Close the mobile menu after picking a link.
  const menu = document.querySelector(".nav-mobile");
  menu?.addEventListener("click", (e) => {
    if (e.target.closest("a")) menu.removeAttribute("open");
  });
})();

// Highlight the current section in the "On this page" list.
(() => {
  const links = [...document.querySelectorAll(".toc a[href^='#']")];
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = new Map(links.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
  const setActive = (id) =>
    links.forEach((a) =>
      byId.get(id) === a ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")
    );
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    },
    { rootMargin: "0px 0px -70% 0px" }
  );
  byId.forEach((_, id) => {
    const heading = document.getElementById(id);
    if (heading) observer.observe(heading);
  });
  setActive(links[0].hash.slice(1));
})();
