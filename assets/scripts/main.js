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

// INFO: products section carousel
const carouselButtonsEl = document.querySelectorAll(
  '[data-bs-target="#productsSectionCarousel"]',
);

if (carouselButtonsEl.length) {
  for (const elItem of carouselButtonsEl) {
    elItem.addEventListener("click", (event) => {
      const dataBsSlideToNumber = Number(
        event.target.getAttribute("data-bs-slide-to") || 0,
      );

      carouselButtonsEl.forEach((elItem, index) => {
        if (index === dataBsSlideToNumber) elItem.classList.add("active");
        else elItem.classList.remove("active");
      });
    });
  }
}

// INFO: FAQ ctas
const faqExpandButtons = document.querySelectorAll('[aria-label="faqButton"]');

if (faqExpandButtons.length) {
  for (const elItem of faqExpandButtons) {
    elItem.addEventListener("click", () => {
      const expandSectionId = elItem.getAttribute("aria-controls");
      const faqDetailSectionEl = document.getElementById(expandSectionId);

      // INFO: show/hide button icon
      if (elItem.classList.contains("show")) {
        elItem.classList.remove("show");
      } else {
        elItem.classList.add("show");
      }
      // INFO: show faq detail section
      if (faqDetailSectionEl.classList.contains("show")) {
        faqDetailSectionEl.classList.remove("show");
      } else {
        faqDetailSectionEl.classList.add("show");
      }
    });
  }
}
