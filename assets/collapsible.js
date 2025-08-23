(() => {
  const items = document.querySelectorAll("[data-accordion-block]");
  if (!items.length) return;

  document.addEventListener(
    "toggle",
    (ev) => {
      if (!(ev.target instanceof HTMLDetailsElement) || !ev.target.open) return;
      if (!ev.target.hasAttribute("data-accordion-block")) return;

      items.forEach((d) => {
        if (d !== ev.target && d.open) d.open = false;
      });
    },
    true
  );
})();
