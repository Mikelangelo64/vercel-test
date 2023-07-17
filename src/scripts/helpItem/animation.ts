const render = (
  item: HTMLElement,
  backgroundProp: HTMLElement,
  evt: MouseEvent
) => {
  const background = backgroundProp;
  const rect = item.getBoundingClientRect();
  const x = rect.left;

  const { width } = rect;

  const positionX = (evt.clientX - x) / width;

  if (positionX < 0.5) {
    background.style.transformOrigin = '0 0';
  } else {
    background.style.transformOrigin = '100% 0';
  }

  background.style.transform =
    evt.type === 'mouseenter' ? 'scaleX(1)' : 'scaleX(0)';
};

const itemAnimation = (itemProp: HTMLElement) => {
  const item = itemProp;
  const background = item.querySelector(
    '.help-item__background'
  ) as HTMLElement | null;

  if (!background) {
    return;
  }

  item.addEventListener('mouseenter', (evt) => {
    render(item, background, evt);
  });

  item.addEventListener('mouseleave', (evt) => {
    render(item, background, evt);
  });
};

export default itemAnimation;
