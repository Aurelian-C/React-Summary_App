class ApplicationView {
  startApplication(data) {
    const markup = this._generateMarkup(data);
    document
      .querySelector('.container')
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
                <div>${card.title}</div>
                ${
                  card.titleDescription
                    ? `<div class="card__title-description">- ${card.titleDescription} -</div>`
                    : ''
                }
              </h2>
              ${tooltipMarkup}
            </div>
            <ul class="card__articles">
              ${card.sections.map(this._generateMarkupArticle).join('')}
            </ul>
          </div>
    `;
      })
      .join('');
    return markupString;
  }

  _generateMarkupArticle(article) {
    let title = article.sectionTitle;

    const createHighlight1 = highlight => {
      if (highlight.includes('<code>')) {
        title = title.replace(
          highlight,
          `<span class="highlight__code--1">${highlight}</span>`
        );
      } else {
        title = title.replace(
          highlight,
          `<span class="highlight__text--1">${highlight}</span>`
        );
      }
    };
    const createHighlight2 = highlight => {
      if (highlight.includes('<code>')) {
        title = title.replace(
          highlight,
          `<span class="highlight__code--2">${highlight}</span>`
        );
      } else {
        title = title.replace(
          highlight,
          `<span class="highlight__text--2">${highlight}</span>`
        );
      }
    };

    if (article.highlights?.highlight1) {
      article.highlights.highlight1.map(createHighlight1);
    }
    if (article.highlights?.highlight2) {
      article.highlights.highlight2.map(createHighlight2);
    }

    return `
      <li class="card__article">
          ${`<p class="card__article-title" data-title='${article.sectionTitle}'>${article.sectionNumber}. ${title}</p>`}
      </li>
    `;
  }
}

export default new ApplicationView();
