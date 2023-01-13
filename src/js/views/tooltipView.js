import { dataStorage } from '../model/modelDataStorage.js';
const allTitlesAsObjects = dataStorage.map(section => section.sections).flat();

class TooltipView {
  constructor() {
    document.body.addEventListener('mouseover', function (e) {
      const cardArticle = e.target.closest('.card__article');
      if (!cardArticle) return;

      const element =
        cardArticle.querySelector('.card__article-title') ||
        cardArticle.querySelector('.card__article-anchor');
      const { title } = element.dataset;
      const obj = allTitlesAsObjects.find(el => el.sectionTitle === title);

      if (!obj.tooltips) return;

      const elIsInTheDOM = cardArticle.querySelector('.tooltip');
      const tooltipHasChildren =
        elIsInTheDOM.querySelector('.tooltip_paragraph');
      if (elIsInTheDOM && !tooltipHasChildren) {
        const tooltipText = obj.tooltips
          .map(string => `<p class="tooltip_paragraph">${string}</p>`)
          .join('');

        elIsInTheDOM.insertAdjacentHTML('afterbegin', tooltipText);
      }

      // const tooltipBox = cardArticle.querySelector('.tooltip');
      // const tooltipDOMRect = cardArticle.getBoundingClientRect();

      // if (tooltipDOMRect.top < 0) {
      //   const moveY = tooltipDOMRect.height;
      //   tooltipBox.style.transform = `translateY(${moveY}px)`;
      // }
    });
  }
}

export default new TooltipView();
