// Theme toggle: follows the system setting until the visitor picks light or dark.
// The saved choice is applied by a small inline script in <head> to avoid a flash.
(function () {
  const root = document.documentElement;
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : media.matches);

  function render() {
    btn.setAttribute("aria-pressed", String(isDark()));
  }

  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    render();
  });

  media.addEventListener("change", render);
  render();
})();
