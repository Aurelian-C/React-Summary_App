import { allTitlesAsObjects } from '../model/modelDataTransformation.js';

class TooltipView {
  constructor() {
    document.body.addEventListener('mouseover', function (e) {
      const hasToolClass = e.target.classList.contains('tooltip');

      if (!hasToolClass) return;

      const title =
        e.target.closest('.card__article-title') ||
        e.target.closest('.card__article-anchor');
      const obj = allTitlesAsObjects.find(
        el => el.sectionTitle === title.textContent
      );

      if (!obj.tooltips) return;

      const tooltipText = obj.tooltips
        .map(string => `<p class="tooltip_paragraph">${string}</p>`)
        .join('');
      const insertTooltip = `<div class="tooltip__text">${tooltipText}</div>`;

      e.target.insertAdjacentHTML('afterbegin', insertTooltip);

      const tooltipBox = e.target.querySelector('.tooltip__text');
      const tooltipDOMRect = tooltipBox.getBoundingClientRect();

      if (tooltipDOMRect.top < 0)
        tooltipBox.style.transform = `translate(-50%, ${Math.abs(
          tooltipDOMRect.top - 10
        )}px)`;
    });
  }
}

export default new TooltipView();
