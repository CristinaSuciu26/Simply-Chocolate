export const scrollDown = () => {
  document
    .getElementById("scroll-down-btn")
    .addEventListener("click", function () {
      const targetSection = document.getElementById("target-section");
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
};
