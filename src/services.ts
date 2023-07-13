import '@/styles/styles.scss';
import vevet from './scripts/config/vevet';
import fadeContentInit from './scripts/fadeContent/init';
import accordionsInit from './scripts/accordion/init';
import stagesStylesInit from './scripts/stages/init';

// document.addEventListener('DOMContentLoaded', () => {
//   init();
// });

vevet.pageLoad.onLoaded(() => {
  fadeContentInit();
  accordionsInit();
  stagesStylesInit();
});
