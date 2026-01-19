// Description for definitions in writing and blog sections
function initPopovers() {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    if (!el._popover) el._popover = new bootstrap.Popover(el);
  });
}

initPopovers();
new MutationObserver(initPopovers).observe(document.body, { childList: true, subtree: true });
