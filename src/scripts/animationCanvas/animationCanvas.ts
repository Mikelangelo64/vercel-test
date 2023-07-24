import img1 from '@/assets/img/animation/logo.webp';
import img2 from '@/assets/img/animation/handshake.webp';
import img3 from '@/assets/img/animation/chart.webp';
import { makeAnimationDesktop, makeAnimationMobile } from './animation';
import vevet from '../config/vevet';

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

  if (vevet.isMobile) {
    makeAnimationMobile(containerEl, canvasEl, ctx, imgArr);
  } else {
    makeAnimationDesktop(containerEl, canvasEl, ctx, imgArr);
  }
};
export default animationCanvasInit;
