import { data } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';

const init = function () {
  ApplicationView.startApplication(data);
};
init();
