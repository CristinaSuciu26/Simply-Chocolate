export const subscribeModal = () => {
  const modal = document.getElementById("subscribe-modal");
  const openBtn = document.getElementById("open-modal-subscribe");
  const closeBtn = document.getElementById("close-modal-subscribe");

  openBtn.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
