class ApplicationView {
  startApplication(data) {
    const markup = this._generateMarkup(data);
    document
      .querySelector('.container__content')
      .insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(card) {
    const markupString = card
      .map((card, idx) => {
        let tooltipMarkup = '';

        if (card.tooltips?.length > 0) {
          tooltipMarkup = `
            <div class="tooltip">
              ${card.tooltips
                .map(
                  tooltip => `<div class="tooltip_paragraph">${tooltip}</div>`
                )
                .join('')}
            </div>
          `;
        }

        return `
          <div class="card">
            <div class="card__title">
              <h2>
                <p class="card__title--1">Section ${idx + 1}</p>
                ${card.title}
              </h2>
              ${tooltipMarkup}
            </div>
            <div class="card__articles">
              ${card.sections.map(this._generateMarkupArticle).join('')}
            </div>
          </div>
    `;
      })
      .join('');
    return markupString;
  }

  _generateMarkupArticle(article, idx) {
    let title = article.sectionTitle;

    const createHighlight1 = highlight => {
      title = title.replace(
        highlight,
        `<span class="highlight--1">${highlight}</span>`
      );
    };
    const createHighlight2 = highlight => {
      title = title.replace(
        highlight,
        `<span class="highlight--2">${highlight}</span>`
      );
    };

    if (article.highlights?.highlight1) {
      article.highlights.highlight1.map(createHighlight1);
    }
    if (article.highlights?.highlight2) {
      article.highlights.highlight2.map(createHighlight2);
    }

    return `
      <div class="card__article">
          ${
            article.sectionSource
              ? `<a class="card__article-anchor" href="${
                  article.sectionSource
                }" target="_blank" data-title='${article.sectionTitle}'>${
                  idx + 1
                }. ${title}</a>`
              : `<p class="card__article-title" data-title='${
                  article.sectionTitle
                }'>${idx + 1}. ${title}</p>`
          }
      </div>
    `;
  }
}

export default new ApplicationView();
