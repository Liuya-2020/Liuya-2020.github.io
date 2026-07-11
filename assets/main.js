/* Language toggle (EN / 中) with persistence.
   Sets html.lang-en / html.lang-zh and the <html lang> attribute. */
(function () {
  var KEY = "lz-lang";
  var root = document.documentElement;

  function apply(lang) {
    var zh = lang === "zh";
    root.classList.toggle("lang-zh", zh);
    root.classList.toggle("lang-en", !zh);
    root.setAttribute("lang", zh ? "zh" : "en");
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === "zh" ? "zh" : "en");

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-set-lang]");
    if (btn) { e.preventDefault(); apply(btn.getAttribute("data-set-lang")); }
  });
})();
