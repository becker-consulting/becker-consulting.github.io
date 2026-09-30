// "On this page": marks the section being read, i.e. the last heading that has scrolled
// up near the top of the window (or the last one, at the bottom of the page). Shared with
// www.henrikbecker.net, which loads it from https://www.becker-consulting.se/assets/js/toc.js.
(() => {
  const links = [...document.querySelectorAll(".toc a[href^='#']")];
  const headings = links.map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1))));
  if (!links.length || headings.includes(null)) return;

  const update = () => {
    const line = 96; // px from the top; a clicked heading lands at 24 (scroll-padding-top)
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let current = 0;
    headings.forEach((h, i) => { if (h.getBoundingClientRect().top <= line) current = i; });
    if (atBottom) current = headings.length - 1;
    links.forEach((a, i) => (i === current ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
  };

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; update(); });
  };
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  update();
})();
