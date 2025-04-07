export const sidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const closeIcon = document.getElementById("close-icon");
  const socials = document.getElementById("social-icons");
  const mobileOptions = document.querySelectorAll(".mobile-list a");
  const desktopOptions = document.querySelectorAll(".desktop-list a");
  const howItsMadeBtn = document.querySelector(".how-its-made-btn");

  function toggleSidebar() {
    if (sidebar.style.right === "-520px" || sidebar.style.right === "") {
      sidebar.style.right = "0px";
      sidebar.style.display = "flex";
      closeIcon.style.display = "block";
      socials.style.display = "flex";
    } else {
      sidebar.style.right = "-520px";
      setTimeout(() => {
        sidebar.style.display = "none";
        socials.style.display = "none";
        closeIcon.style.display = "none";
      }, 90);
    }
  }

  const closeSidebar = () => {
    sidebar.style.right = "-520px";
    setTimeout(() => {
      sidebar.style.display = "none";
      socials.style.display = "none";
      closeIcon.style.display = "none";
    }, 90);
  };

  // Smooth scroll function
  const scrollToSection = (event) => {
    event.preventDefault();

    let targetId =
      event.target.getAttribute("href") ||
      event.target.getAttribute("data-target");

    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    closeSidebar();
  };

  // Add smooth scroll to both mobile & desktop options
  [...mobileOptions, ...desktopOptions].forEach((option) => {
    option.addEventListener("click", scrollToSection);
  });

  if (howItsMadeBtn) {
    howItsMadeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const targetElement = document.querySelector("#how-its-made");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Hide sidebar when resizing to desktop
  const handleResize = () => {
    if (window.innerWidth > 768) {
      sidebar.style.display = "none";
      sidebar.style.right = "-520px";
    }
  };

  // Listen for window resize
  window.addEventListener("resize", handleResize);
  handleResize();

  // Add event listener to toggle button
  document
    .getElementById("toggle-button")
    .addEventListener("click", toggleSidebar);

  // Add event listener to close icon
  document
    .getElementById("close-icon")
    .addEventListener("click", toggleSidebar);
};
