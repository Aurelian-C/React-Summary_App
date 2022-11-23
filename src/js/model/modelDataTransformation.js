import { data } from './modelDataStorage.js';

export const allTitlesAsObjects = data.map(section => section.sections).flat();
