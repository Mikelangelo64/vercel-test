import img1 from '@/assets/img/animation/logo.webp';
import img2 from '@/assets/img/animation/handshake.webp';
import img3 from '@/assets/img/animation/chart.webp';
import makeAnimation from './animation';

const animationCanvasInit = () => {
  const containerEl = document.querySelector('.banner-canvas__container');

  if (!containerEl) {
    return;
  }

  const canvasEl = containerEl.querySelector(
    '.canvas-logo'
  ) as HTMLCanvasElement;

  if (!canvasEl) {
    return;
  }

  const ctx = canvasEl.getContext('2d');

  const imgArr = [img1, img2, img3];

  console.log('hui');
  makeAnimation(containerEl, canvasEl, ctx, imgArr);
};
animationCanvasInit();
export default animationCanvasInit;
