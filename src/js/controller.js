import { dataStorage } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';
import TooltipView from './views/tooltipView.js';

const init = function () {
  const allTitlesAsObjects = dataStorage
    .map(section => section.sections)
    .flat();
  ApplicationView.startApplication(dataStorage);
  TooltipView.start(allTitlesAsObjects);
};
init();
