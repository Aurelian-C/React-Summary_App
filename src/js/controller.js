import { data } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';
import TooltipView from './views/tooltipView.js';

const init = function () {
  ApplicationView.startApplication(data);
};
init();
