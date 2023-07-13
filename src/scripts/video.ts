import videoSrc from '@/assets/video/bg.mp4';

const videoHandler = () => {
  const container: HTMLElement | null = document.querySelector('.video-bg');

  if (!container) {
    return;
  }

  const video = container.querySelector('video');

  if (!video) {
    return;
  }

  // const video = document.createElement('video');
  const source = document.createElement('source');

  source.setAttribute('src', `${videoSrc}`);
  source.setAttribute('type', 'video/mp4');

  // video.setAttribute('preload', 'auto');
  // video.setAttribute('autoplay', '');
  // video.setAttribute('muted', '');
  // video.setAttribute('playsinline', '');
  // video.setAttribute('disablePictureInPicture', '');
  // video.setAttribute('loop', '');

  video.appendChild(source);
  // container.appendChild(video);
  // const children = Array.from(video.children) as HTMLSourceElement[];

  // if (children.length === 0) {
  //   return;
  // }

  // children.forEach((item) => {
  //   const sourceElement = item;
  //   sourceElement.src = sourceElement.dataset.src || '';
  // });

  video.load();

  video.addEventListener('loadeddata', () => {
    console.log(1);
    setTimeout(() => {
      container.classList.add('loaded');
    }, 0);
  });
};

videoHandler();

export default videoHandler;
