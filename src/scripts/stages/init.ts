const changeHeight = (
  section: HTMLElement,
  additionalArr: HTMLElement[],
  maxHeightProps: number
) => {
  let maxHeight = maxHeightProps;
  additionalArr.forEach((additional) => {
    maxHeight =
      maxHeight < additional.clientHeight ? additional.clientHeight : maxHeight;
  });

  section.style.setProperty(
    '--additional-height',
    `${maxHeight === 0 ? 'auto' : `${maxHeight}px`}`
  );
};

const stagesStylesInit = () => {
  const sections: HTMLElement[] = Array.from(
    document.querySelectorAll('.stages')
  );

  if (sections.length === 0) {
    return;
  }

  sections.forEach((section) => {
    const additionalArr: HTMLElement[] = Array.from(
      section.querySelectorAll('.stages-additional')
    );

    if (additionalArr.length === 0) {
      return;
    }

    const maxHeight = 0;

    changeHeight(section, additionalArr, maxHeight);

    const breakpoint = '(max-width: 899px)';
    const breakpointList = window.matchMedia(breakpoint);

    breakpointList.addEventListener('change', () => {
      changeHeight(section, additionalArr, maxHeight);
    });
  });
};

export default stagesStylesInit;
