export const buyNowModal = () => {
  const modal = document.getElementById("buy-now-modal");
  const openBtns = document.querySelectorAll(".open-modal-btn");
  const closeBtn = document.getElementById("close-modal");

  openBtns.forEach((button) => {
    button.addEventListener("click", function () {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; 
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = ""; 
  };

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
};
