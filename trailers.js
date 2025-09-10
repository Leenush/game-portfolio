document.querySelectorAll(".media").forEach(media => {
    const video = media.querySelector(".trailer");
  
    media.addEventListener("mouseenter", () => {
      video.currentTime = 0;  // restart trailer from beginning
      video.play();
    });
  
    media.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
  