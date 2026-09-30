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
