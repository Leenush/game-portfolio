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

  document.querySelectorAll(".play-video-btn").forEach(button => {
    button.addEventListener("click", () => {
      const video = button.previousElementSibling;
      video.muted = false;
      video.play();
      button.style.display = "none";
    });
  });
  
  