class TooltipView {
  _containerTooltip = document.querySelector('.container__tooltip');

  start(data) {
    document.body.addEventListener('click', e => {
      const cardArticle = e.target.closest('.card__article');
      if (!cardArticle) return;

      const element =
        cardArticle.querySelector('.card__article-title') ||
        cardArticle.querySelector('.card__article-anchor');
      const { title } = element.dataset;
      const obj = data.find(el => el.sectionTitle === title);
      console.log(obj);

      if (!obj.tooltips) return;

      const markup = obj.tooltips
        .map(paragraph => `<div class="tooltip_paragraph">${paragraph}</div>`)
        .join('');

      this._containerTooltip.innerHTML =
        `<h2>${obj.sectionTitle}</h2>` +
        markup +
        `<a href=${obj.sectionSource} class="paragraph__article-anchor" target="_blank" data-title=${obj.sectionTitle}>Read more about this article!</a>`;
    });
  }
}

export default new TooltipView();
