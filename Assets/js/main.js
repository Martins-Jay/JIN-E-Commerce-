const menuOpenBtn = document.getElementById("menu-open-btn");
const showNavBar = document.querySelector(".mobile-nav-menu");
const closeMenuBtn = document.getElementById("menu-close-btn");

const submenuNavList = document.querySelectorAll(".submenu-nav-list");

// OPEN & CLOSE MENU BUTTON
menuOpenBtn?.addEventListener("click", () => {
  showNavBar?.classList.toggle("show");
});

closeMenuBtn?.addEventListener("click", () => {
  showNavBar?.classList.toggle("show");
});


// ACCORDION MENU
submenuNavList.forEach((value) => {
  let accordionMenu = value.parentElement?.querySelector(".accordion-menu");

  const clickedBtn = value.previousElementSibling?.querySelector(".fa-plus");

  accordionMenu?.addEventListener("click", () => {
    value.classList.toggle("show");

    if (clickedBtn?.classList.contains("fa-plus")) {
      clickedBtn?.classList.replace("fa-plus", "fa-minus");
    } else if (clickedBtn?.classList.contains("fa-minus")) {
      clickedBtn?.classList.replace("fa-minus", "fa-plus");
    }
  });
});
