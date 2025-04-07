export const smoothScroll = () => {
  // Select all links in the footer
  const links = document.querySelectorAll(".footer-list a");

  // Function to handle scrolling
  const scrollToSection = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");

    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};
