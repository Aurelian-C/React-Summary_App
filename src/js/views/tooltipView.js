class TooltipView {
  start(data) {
    document.body.addEventListener('mouseover', function (e) {
      const cardArticle = e.target.closest('.card__article');
      if (!cardArticle) return;

      const element =
        cardArticle.querySelector('.card__article-title') ||
        cardArticle.querySelector('.card__article-anchor');
      const { title } = element.dataset;
      const obj = data.find(el => el.sectionTitle === title);

      if (!obj.tooltips) return;

      const tooltipContainer = cardArticle.querySelector('.tooltip');
      const tooltipHasChildren =
        tooltipContainer.querySelector('.tooltip_paragraph');
      if (tooltipContainer && !tooltipHasChildren) {
        const tooltipText = obj.tooltips
          .map(string => `<p class="tooltip_paragraph">${string}</p>`)
          .join('');

        tooltipContainer.insertAdjacentHTML('afterbegin', tooltipText);
      }

      // Positioning the tooltip box relative to the body width
      const bodyDimensions = document.body.getBoundingClientRect();
      const { width: bodyWidth } = bodyDimensions;
      const tooltipContainerPosition = tooltipContainer.getBoundingClientRect();
      const tooltipContainerOffsetX =
        tooltipContainerPosition.left + tooltipContainerPosition.width;

      if (tooltipContainerOffsetX > bodyWidth) {
        const moveX = tooltipContainerOffsetX + 10 - bodyWidth;
        tooltipContainer.style.transform = `translateX(-${moveX}px)`;
      }

      // Modify the tooltip height & width if the tooltip height is bigger than viewport height
      // const viewportHeight = window.innerHeight;
      // const tooltipContainerHeight =
      //   tooltipContainerPosition.top + tooltipContainerPosition.height;
      // if (tooltipContainerHeight > viewportHeight) {
      //   tooltipContainer.style.width = `850px`;
      // }
    });
  }
}

export default new TooltipView();
