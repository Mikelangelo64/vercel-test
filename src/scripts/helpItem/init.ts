import itemAnimation from './animation';

const helpItemInit = () => {
  const sectionArray = Array.from(
    document.querySelectorAll('.help') as NodeListOf<HTMLElement>
  );

  if (sectionArray.length === 0) {
    return;
  }

  sectionArray.forEach((section) => {
    const itemArray = Array.from(
      section.querySelectorAll('.help-item') as NodeListOf<HTMLElement>
    );

    if (itemArray.length === 0) {
      return;
    }

    itemArray.forEach((item) => {
      if (!item) {
        return;
      }
      itemAnimation(item);
    });
  });
};

export default helpItemInit;
