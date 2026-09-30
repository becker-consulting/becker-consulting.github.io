// Theme toggle: the invisible button in the top-left corner flips between light and
// dark from whatever is showing now, system setting included. Not remembered between
// pages. Shared with www.henrikbecker.net, which loads it from
// https://www.becker-consulting.se/assets/js/theme.js.
(() => {
  const root = document.documentElement;
  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const systemDark = matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = root.classList.contains("dark") || (systemDark && !root.classList.contains("light"));
    root.classList.toggle("dark", !isDark);
    root.classList.toggle("light", isDark);
  });
})();
