import languages from './constants/languages';
import flows from './constants/flows';

export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ANWSERING_QUESTIONS: 'userIsAnwseringQuestions',
};

export default class AppState {
  constructor() {
    this.status = appStatuses.VIEWING;
    this.selectedLanguage = languages.SPANISH;
    this.flow = flows[languages.SPANISH];
  }
}
