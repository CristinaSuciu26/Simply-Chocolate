export const reviewModal = () => {
  const modal = document.getElementById("review-modal");
  const openBtn = document.getElementById("open-modal-review");
  const closeBtn = document.getElementById("close-modal-review");

  openBtn.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
