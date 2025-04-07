import { buyNowModal } from "./js/buyNowModal";
import { telInput } from "./js/intl-tel-input";
import { reviewModal } from "./js/reviewModal";
import { scrollDown } from "./js/scrollDown";
import { sidebar } from "./js/sidebar";
import { smoothScroll } from "./js/smoothScroll.js";
import { subscribeModal } from "./js/subscribeModal";
import { slider } from "./js/swiper";
import { videoPlayer } from "./js/videoPlayer";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    slider();
    sidebar();
    scrollDown();
    buyNowModal();
    reviewModal();
    subscribeModal();
    smoothScroll();
    videoPlayer();
    telInput();
  } catch (error) {
    console.error("Error initializing modules:", error);
  }
});
