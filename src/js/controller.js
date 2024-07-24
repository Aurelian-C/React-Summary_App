import { dataStorage } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';
import TooltipView from './views/tooltipView.js';

const inputSearchTopic = document.getElementById('search-topic');
const container = document.querySelector('.container');

const searchTopic = function () {
  inputSearchTopic.addEventListener('input', e => {
    const filteredDataStorage = dataStorage
      .map(section => {
        const filteredSections = section.sections.filter(article =>
          article.sectionTitle
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
        return {
          title: section.title,
          titleDescription: section.titleDescription,
          titleNumber: section.titleNumber,
          sections: filteredSections,
        };
      })
      .filter(section => section.sections.length > 0);

    container.innerHTML = '';
    ApplicationView.startApplication(filteredDataStorage);
  });
};

const init = function () {
  const allTitlesAsObjects = dataStorage
    .map(section => section.sections)
    .flat();

  ApplicationView.startApplication(dataStorage);
  TooltipView.start(allTitlesAsObjects);
  searchTopic();
};
init();
