'use strict';

{
  // スライダー
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ハンバーガーメニュー

  let navbar = document.querySelector(".navbar");

  document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle("active");
  }

  window.onscroll = () => {
    navbar.classList.remove("active");
  }

}
