export const slider = () => {
  // First Swiper
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
      1280: { slidesPerView: 4 },
    },
  });

  // Second Swiper
  new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    pagination: {
      el: ".swiper-container-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
      1280: { slidesPerView: 4 },
    },
  });
};
