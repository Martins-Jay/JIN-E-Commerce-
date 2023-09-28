const menuOpenBtn = document.getElementById("menu-open-btn");
const showNavBar = document.querySelector(".mobile-nav-menu");
const closeMenuBtn = document.getElementById("menu-close-btn");
const pageBody = document.querySelector(".main");
const header = document.querySelector(".main-header");
const navLink = document.querySelectorAll(".navLink");

const submenuNavList = document.querySelectorAll(".submenu-nav-list");

const hiddenElements = document.querySelectorAll(".hidden");

// OPEN & CLOSE MENU BUTTON ----- NAVIGATION SECTION ------- //
menuOpenBtn?.addEventListener("click", () => {
  showNavBar?.classList.toggle("showMenu");
});

closeMenuBtn?.addEventListener("click", () => {
  showNavBar?.classList.toggle("showMenu");
});

pageBody?.addEventListener("click", () => {
  showNavBar?.classList.remove("showMenu");
});

header?.addEventListener("click", () => {
  showNavBar?.classList.remove("showMenu");
});

// CLOSE NAVBAR AFTER SELECTING A NAVLINK
navLink.forEach((value) => {
  value.addEventListener("click", () => {
    showNavBar?.classList.toggle("showMenu");
  });
});

// ACCORDION MENU --- REMOVE SHOW
function removeShow(index) {
  submenuNavList.forEach((value2, index2) => {
    const clickedBtn2 =
      value2.previousElementSibling?.querySelector(".fa-minus");

    if (index != index2) {
      value2.classList.remove("show");

      clickedBtn2?.classList.replace("fa-minus", "fa-plus");
    }
  });
}

// ACCORDION MENU --- MAIN FUNCTION
submenuNavList.forEach((value, index) => {
  let accordionMenu = value.parentElement?.querySelector(".accordion-menu");
  const clickedBtn = value.previousElementSibling?.querySelector(".fa-plus");

  accordionMenu?.addEventListener("click", () => {
    value.classList.toggle("show");

    if (clickedBtn?.classList.contains("fa-plus")) {
      clickedBtn?.classList.replace("fa-plus", "fa-minus");
    } else if (clickedBtn?.classList.contains("fa-minus")) {
      clickedBtn?.classList.replace("fa-minus", "fa-plus");
    }

    removeShow(index);
  });
});

// SWIPER JS
const home_swiper = new Swiper(".home-swiper", {
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

// OBSERVER FOR SWIPER TEXT REVEAL (appearOnSwipe is an object)
const appearOnSwipe = new IntersectionObserver((observedValues) => {
  observedValues.forEach((value) => {
    if (value.isIntersecting) {
      value.target.classList.add("show");
    } else {
      value.target.classList.remove("show");
    }
  });
});

// LETS TELL THE OBSERVER WHAT TO OBSERVE
hiddenElements.forEach((value) => {
  appearOnSwipe.observe(value);
});
