class ApplicationView {
  startApplication(data) {
    const markup = this._generateMarkup(data);
    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(card) {
    console.log(card);
    const markupString = card
      .map(card => {
        return `
          <div class="card">
            <h2 class="card__title">${card.title}</h2>
            <div class="card__articles">
              ${card.sections.map(this._generateMarkupArticle).join('')}
            </div>
          </div>
    `;
      })
      .join('');
    return markupString;
  }

  _generateMarkupArticle(article) {
    const descriptor = article.sectionArticles
      .map(descriptor => {
        if (!descriptor.articleTitle) return;

        return `
          <li class="card__descriptor">
          ${
            descriptor.articleSource
              ? `<a class="card__descriptor-anchor" href="${descriptor.articleSource}" target="_blank">${descriptor.articleTitle}</a>`
              : `<p class="card__descriptor-title">${descriptor.articleTitle}</p>`
          }
          </li>`;
      })
      .join('');

    return `
      <div class="card__article">
        <div class="card__article-wrapper">
          ${
            article.sectionSource
              ? `<a class="card__article-anchor" href="${article.sectionSource}" target="_blank">${article.sectionTitle}</a>`
              : `<p class="card__article-title">${article.sectionTitle}</p>`
          }
        </div>
        <ul class="card__descriptors">
          ${descriptor}
        </ul>
      </div>
    `;
  }
}

export default new ApplicationView();
