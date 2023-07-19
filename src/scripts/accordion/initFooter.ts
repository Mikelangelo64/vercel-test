import { Timeline } from 'vevet';

const accordionFooterInit = () => {
  const element = document.querySelector('.footer') as HTMLElement | null;
  if (!element) {
    return;
  }

  const button = element.querySelector('.footer__button') as HTMLElement | null;
  const body = element.querySelector('.footer-nav') as HTMLElement | null;

  if (!button || !body) {
    return;
  }

  const bodyInner = body.querySelector('.footer-nav__list');
  if (!bodyInner) {
    return;
  }

  const timeline = new Timeline({ duration: 400 });

  timeline.addCallback('progress', ({ easing, progress }) => {
    const height =
      progress === 1 ? 'auto' : `${bodyInner.clientHeight * easing}px`;

    body.style.height = height;
    body.style.opacity = `${easing}`;
  });

  button.addEventListener('click', () => {
    element.classList.toggle('active');

    if (timeline.progress > 0) {
      timeline.reverse();
    } else {
      timeline.play();
    }
  });

  if (element.classList.contains('active')) {
    timeline.play();
  }
};

export default accordionFooterInit;
