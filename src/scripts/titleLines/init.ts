const changeWidth = (container: HTMLElement, title: HTMLElement) => {
  const width = title.clientWidth;

  container.style.setProperty('--title-width', `${width}px`);
};

const initTitleLines = () => {
  const titleContainers: HTMLElement[] = Array.from(
    document.querySelectorAll('.title__container')
  );

  if (titleContainers.length === 0) {
    return;
  }

  titleContainers.forEach((container) => {
    const title: HTMLElement | null = container.querySelector('.title');

    if (!title) {
      return;
    }

    changeWidth(container, title);

    const breakpoint = '(max-width: 899px)';
    const breakpointList = window.matchMedia(breakpoint);

    breakpointList.addEventListener('change', (evt) => {
      if (evt.matches) {
        changeWidth(container, title);
      }
    });
  });
};

export default initTitleLines;
