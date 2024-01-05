// INFO: set header position when scroll
const headerContainerEl = document.getElementById("header-container-el");
const handleScrollPage = () => {
  if (window.scrollY > 0) headerContainerEl.classList.add("sticky-header");
  else headerContainerEl.classList.remove("sticky-header");
};

window.addEventListener("scroll", () => handleScrollPage());

handleScrollPage();

window.removeEventListener("scroll", () => handleScrollPage());

// INFO: header menu toggle button
const headerMenuToggleButtonEl = document.getElementById("header-menu-toggle");
const headerMenuItemsEl = document.getElementById("header-menu-items");

headerMenuToggleButtonEl.addEventListener("click", (event) => {
  if (headerMenuItemsEl.classList.contains("show")) {
    headerMenuItemsEl.classList.remove("show");
  } else {
    headerMenuItemsEl.classList.add("show");
  }
});

document.addEventListener("click", (event) => {
  const isClickInsideHeaderToggleBtn = headerMenuToggleButtonEl.contains(
    event.target,
  );
  if (!isClickInsideHeaderToggleBtn) headerMenuItemsEl.classList.remove("show");
});
