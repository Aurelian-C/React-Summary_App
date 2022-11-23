class ApplicationView {
  startApplication(data) {
    const markup = this._generateMarkup(data);
    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(card) {
    const markupString = card
      .map(card => {
        return `
          <div class="card">
            <h2 class="card__title">${card.title}</h2>
            <div class="card__articles">
              ${card.sections.map(this._generateMarkupTitles).join('')}
            </div>
          </div>
    `;
      })
      .join('');
    return markupString;
  }

  _generateMarkupTitles(article) {
    const title = article.highlights
      ? article.sectionTitle
          .replace(
            `${article.highlights.highlight1}`,
            `<span class="tooltip highlight--1">${article.highlights.highlight1}</span>`
          )
          .replace(
            `${article.highlights.highlight2}`,
            `<span class="tooltip highlight--2">${article.highlights.highlight2}</span>`
          )
      : article.sectionTitle;

    return `
      <div class="card__article">
          ${
            article.sectionSource
              ? `<a class="card__article-anchor" href="${article.sectionSource}" target="_blank">${title}</a>`
              : `<p class="card__article-title">${title}</p>`
          }
      </div>
    `;
  }
}

export default new ApplicationView();
