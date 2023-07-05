//hamburger
let menuBtn = document.querySelector(".nav-menu-btn");
let closeBtn = document.querySelector(".nav-close-btn");
let nav = document.querySelector(".nav-container");
let navclose = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
  nav.classList.add("active");
});
closeBtn.addEventListener("click", () =>{
  nav.classList.remove("active");
});
navclose.forEach((navclose) =>{
  navclose.addEventListener("click", () =>{
    nav.classList.remove("active");
  });
});

//search
searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
  searchForm.classList.toggle("active2");
}

//swiper
var swiper = new Swiper(".equipment-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

//ScrollReveal
ScrollReveal({ 
  duration:2500,
  distance:'50px',
  delay:120
});

ScrollReveal().reveal('.banner-content, .sub-banner-content', { delay:400, origin:'left'});
ScrollReveal().reveal('.equipment-title2', { delay:400, origin:'bottom', interval:200});

