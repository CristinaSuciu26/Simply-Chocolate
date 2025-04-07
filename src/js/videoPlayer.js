export const videoPlayer = () => {
  const videoContainer = document.getElementById("video-container");
  const playButton = document.getElementById("thumbnail");

  document.getElementById("thumbnail").addEventListener("click", function () {
    playButton.style.display = "none";
    videoContainer.innerHTML = `
    <iframe  class="how-its-made" id="youtube-video"
          src="https://www.youtube.com/embed/xPe1jMuX32s?autoplay=1&enablejsapi=1" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          
          allowfullscreen>

    </iframe>`;
  });

  const pauseVideo = () => {
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };
  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          pauseVideo();
        }
      });
    },
    { threshold: 0 }
  );

  // Observe the video container
  observer.observe(videoContainer);
};
