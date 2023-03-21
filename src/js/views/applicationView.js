class ApplicationView {
  startApplication(data) {
    const markup = this._generateMarkup(data);
    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', markup);
  }

  // _generateMarkupColumns(card) {
  //   const markupString = card
  //     .map(card => {
  //       return `
  //           <h2 class="card__title">${card.title}</h2>
  //           ${card.sections.map(this._generateMarkupArticle).join('')}
  //   `;
  //     })
  //     .join('');
  //   return markupString;
  // }

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
    const tooltipMarkup =
      article.tooltips?.length > 0 ? '<div class="tooltip"></div>' : '';
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
       ${tooltipMarkup}
      </div>
    `;
  }

  _generateMarkupTooltip(article) {
    return `<div class={tooltip}></div>`;
  }
}

export default new ApplicationView();

/*
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
*/
