import { init } from '@/scripts/main';
import '@/styles/styles.scss';
import vevet from './scripts/config/vevet';

// document.addEventListener('DOMContentLoaded', () => {
//   init();
// });

vevet.pageLoad.onLoaded(() => {
  init();
});
