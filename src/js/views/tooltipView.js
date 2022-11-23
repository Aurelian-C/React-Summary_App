import { allTitlesAsObjects } from '../model/modelDataTransformation.js';

class TooltipView {
  constructor() {
    document.body.addEventListener('mouseover', function (e) {
      const hasToolClass = e.target.classList.contains('tooltip');
      if (!hasToolClass) return;

      const title = e.target.closest('.card__article-title');
      console.log(title);
      const obj = allTitlesAsObjects.find(el => {
        return el.sectionTitle === title.textContent;
      });
      if (!obj.tooltips) return;
      console.log(obj.tooltips);
      const tooltipText = obj.tooltips
        .map(string => `<p class="tooltip_paragraph">${string}</p>`)
        .join('');
      const insertTooltip = `<div class="tooltip__text">${tooltipText}</div>`;

      e.target.insertAdjacentHTML('afterbegin', insertTooltip);
      console.log('work');
    });
  }
}

export default new TooltipView();
