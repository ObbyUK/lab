import languages from './constants/languages';
import skillLevels from './constants/skillLevels';
import flows from './constants/flows';

export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ANWSERING_QUESTIONS: 'userIsAnwseringQuestions',
  ENTERING_CONTACT_INFORMATION: 'userIsEnteringContactInformation',
};

export default class AppState {
  constructor() {
    this.status = appStatuses.VIEWING;
    this.selectedLanguage = languages.SPANISH;
    this.flow = flows[languages.SPANISH];
    this.skillLevel = null;
    this.time = null;
    this.locations = [];
  }
}
