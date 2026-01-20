document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SMOOTH APPEAR BLOCKS
     =============================== */

  const blocks = document.querySelectorAll(
    ".card, .tile, .section, .hero-media"
  );

  blocks.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("is-visible");
    }, i * 120); // мʼяка черга
  });


  /* ===============================
     ACTIVE NAV
     =============================== */

  const page = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    }
  });


  /* ===============================
     PAGE TRANSITION
     =============================== */

  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !href.startsWith("mailto")
    ) {
      link.addEventListener("click", e => {
        e.preventDefault();

        document.body.classList.add("page-hidden");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });

});
