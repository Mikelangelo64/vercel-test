import accordionFooterInit from './accordion/initFooter';
import anchorsInit from './anchor/init';
import vevet from './config/vevet';
import helpItemInit from './helpItem/init';
import helpParallaxInit from './helpParallax/init';
import initPopups from './popup/init';
import scrollBarInit from './scrollbar';
import initTitleLines from './titleLines/init';
// import vevet from './config/vevet';

export const init = () => {
  scrollBarInit();

  initTitleLines();
  if (!vevet.isMobile) {
    helpItemInit();
    helpParallaxInit();
  } else {
    accordionFooterInit();
  }

  const header = document.querySelector('.header') as HTMLElement;
  const headerHeight = header ? header.offsetHeight : 0;
  let isScrolled = false;

  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
      isScrolled = true;
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20 && !isScrolled) {
        header.classList.add('scrolled');
        isScrolled = true;
        return;
      }

      if (window.scrollY <= 20 && isScrolled) {
        header.classList.remove('scrolled');
        isScrolled = false;
      }
    });
  }

  const popups = initPopups();

  anchorsInit(headerHeight, popups);

  const formArr = document.querySelectorAll('form');
  if (formArr.length !== 0) {
    formArr.forEach((form) => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let response: string | Error = '';
        const formData = new FormData(form);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/form.php', true);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            response = xhr.responseText;
            // Код в этом блоке выполняется при успешной отправке сообщения
            // alert(response);
          }

          // console.log(response);
          popups.forEach(({ timeline, isThanks, isError }) => {
            if (isThanks && typeof response === 'string' && response !== '') {
              timeline?.play();
            } else if (isError) {
              timeline?.play();
            } else {
              timeline?.reverse();
            }
          });
        };

        xhr.send(formData);
      });
    });

    // document.addEventListener(
    //   'wpcf7mailsent',
    //   function () {
    //     popups.forEach(({ timeline, isThanksPopup }) => {
    //       if (isThanksPopup) {
    //         timeline.play();
    //       } else {
    //         timeline.reverse();
    //       }
    //     });
    //   },
    //   false
    // );
  }
};
