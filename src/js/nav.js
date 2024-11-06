(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("body");
  const menuLinks = document.querySelectorAll("[data-menu-link]");


  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuBtnRef.classList.remove("is-open");
      menuBtnRef.setAttribute("aria-expanded", false);
      mobileMenuRef.classList.remove("is-open");
      body.classList.remove("no-scroll");
    });
  });
})();
