(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (nav) {
    const page = window.location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll("a[data-nav]").forEach(function (link) {
      const navKey = link.getAttribute("data-nav");
      const isHome = page === "" || page === "index.html";
      const active =
        (navKey === "home" && isHome) ||
        (navKey === "about" && page === "about.html") ||
        (navKey === "contact" && page === "contact.html") ||
        (navKey === "afcos" && isHome && window.location.hash === "#afcos");
      if (active) link.classList.add("active");
    });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }
})();
