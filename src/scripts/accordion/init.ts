import { Timeline } from 'vevet';

const accordionsInit = () => {
  const elements: HTMLElement[] = Array.from(
    document.querySelectorAll('.accordion-list__item')
  );

  if (elements.length === 0) {
    return;
  }

  elements.forEach((element) => {
    if (!element) {
      return;
    }

    const button = element.querySelector(
      '.accordion-list__summary'
    ) as HTMLElement;
    const body = element.querySelector(
      '.accordion-list__details'
    ) as HTMLElement;

    if (!button || !body) {
      return;
    }

    const bodyInner = body.querySelector('.accordion-list__inner');
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
  });
};

export default accordionsInit;
