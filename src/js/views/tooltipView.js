import { allTitlesAsObjects } from '../model/modelDataTransformation.js';

class TooltipView {
  constructor() {
    document.body.addEventListener('mouseover', function (e) {
      const hasToolClass = e.target.classList.contains('tooltip');

      if (!hasToolClass) return;

      const element =
        e.target.closest('.card__article-title') ||
        e.target.closest('.card__article-anchor');
      const { title } = element.dataset;
      const obj = allTitlesAsObjects.find(el => el.sectionTitle === title);

      if (!obj.tooltips) return;

      const elIsInTheDOM = element.querySelector('.tooltip__text');
      if (!elIsInTheDOM) {
        const tooltipText = obj.tooltips
          .map(string => `<p class="tooltip_paragraph">${string}</p>`)
          .join('');
        const insertTooltip = `<div class="tooltip__text">${tooltipText}</div>`;

        e.target.insertAdjacentHTML('afterbegin', insertTooltip);
      }

      const tooltipBox = e.target.querySelector('.tooltip__text');
      const tooltipDOMRect = tooltipBox.getBoundingClientRect();
      const viewportWidth = document.body.getBoundingClientRect().width;
      const tooltipBoxWidth = tooltipDOMRect.left + tooltipDOMRect.width;

      if (tooltipDOMRect.top < 0 || tooltipBoxWidth > viewportWidth) {
        const moveX = viewportWidth - (tooltipBoxWidth + 10);
        const moveY = tooltipDOMRect.height;
        tooltipBox.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
  }
}

export default new TooltipView();
