import { AnimationFrame } from 'vevet';
import useObserver from '../config/useObserver';
import parallaxItem, { clearListener } from './parallax';

const helpParallaxInit = () => {
  const sectionArray = Array.from(
    document.querySelectorAll('.help-images') as NodeListOf<HTMLElement>
  );

  if (sectionArray.length === 0) {
    return;
  }

  sectionArray.forEach((section) => {
    const itemArray = Array.from(
      section.querySelectorAll(
        '.help-images__circle'
      ) as NodeListOf<HTMLElement>
    );

    if (itemArray.length === 0) {
      return;
    }

    let listenerArray: Array<() => void> = [];
    let frameArray: Array<AnimationFrame> = [];

    useObserver({
      target: section,
      callbackIn: () => {
        itemArray.forEach((item) => {
          if (!item) {
            return;
          }
          const { listener, frame } = parallaxItem(item, section);
          listenerArray.push(listener);
          frameArray.push(frame);
        });
      },
      callbackOut: () => {
        itemArray.forEach((itemProp) => {
          const item = itemProp;

          if (!item) {
            return;
          }
          item.style.transform = '';
        });

        listenerArray.forEach((listener) => {
          clearListener(listener);
        });

        frameArray.forEach((frame) => {
          frame.destroy();
        });

        listenerArray = [];
        frameArray = [];
      },
    });
  });
};

export default helpParallaxInit;
