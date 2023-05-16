class TooltipView {
  _containerTooltip = document.querySelector('.tooltip');

  start(data) {
    document.body.addEventListener('click', e => {
      const cardArticle = e.target.closest('.card__article');
      const closeButton = e.target.closest('.fa-xmark');

      if (closeButton || !this._containerTooltip.contains(e.target)) {
        this._containerTooltip.classList.remove('show');
      }

      if (!cardArticle) return;

      const element =
        cardArticle.querySelector('.card__article-title') ||
        cardArticle.querySelector('.card__article-anchor');
      const { title } = element.dataset;
      const obj = data.find(el => el.sectionTitle === title);

      if (!obj.tooltips) return;

      const markup = obj.tooltips
        .map(paragraph => `<div class="tooltip_paragraph">${paragraph}</div>`)
        .join('');

      this._containerTooltip.innerHTML =
        '<i class="fa-solid fa-xmark"></i>' +
        `<h2>${obj.sectionTitle}</h2>` +
        markup +
        `<a href=${obj.sectionSource} class="paragraph__article-anchor" target="_blank">Read more about this article!</a>`;

      this._containerTooltip.classList.add('show');
    });
  }
}

export default new TooltipView();
