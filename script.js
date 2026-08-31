// Mobiles Menü
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  });

  // Menü nach Klick auf einen Link schließen
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Jahr im Footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Kontaktformular: noch kein Backend -> Hinweis anzeigen
const form = document.querySelector(".contact__form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = form.querySelector(".contact__note");
    if (note) {
      note.hidden = false;
      note.textContent =
        "Das Formular ist noch nicht aktiv. Bitte schreib mir vorerst direkt per E-Mail.";
    }
  });
}
