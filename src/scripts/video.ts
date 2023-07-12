const videoHandler = () => {
  const container: HTMLElement | null = document.querySelector('.video-bg');

  if (!container) {
    return;
  }

  const video: HTMLVideoElement | null = container.querySelector('video');

  if (!video) {
    return;
  }

  video.load();
  video.addEventListener('loadeddata', () => {
    setTimeout(() => {
      console.log(1);

      container.classList.add('loaded');
    }, 0);
  });
};

export default videoHandler;
