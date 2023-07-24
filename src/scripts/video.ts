// import videoSrc from '@/assets/video/bg.mp4';

import vevet from './config/vevet';

const videoHandler = () => {
  const container: HTMLElement | null = document.querySelector('.video-bg');

  if (!container) {
    return;
  }

  const video = container.querySelector('video');

  if (!video) {
    return;
  }

  // const source = document.createElement('source');
  const source = document.querySelector('source');

  if (!source) {
    return;
  }

  const dataSrc = source.dataset.src;

  if (!dataSrc) {
    return;
  }

  source.src = dataSrc;
  // source.setAttribute('type', 'video/mp4');

  // video.appendChild(source);

  video.load();

  video.addEventListener('loadeddata', () => {
    // console.log(1);
    setTimeout(() => {
      container.classList.add('loaded');
    }, 0);
  });
};

vevet.pageLoad.onLoaded(() => {
  videoHandler();
});

export default videoHandler;
