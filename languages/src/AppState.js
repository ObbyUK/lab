import languages from './constants/languages';
import flows from './constants/flows';

export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ANWSERING_QUESTIONS: 'userIsAnwseringQuestions',
  VIEWING_CLASS_OPTIONS: 'userIsViewingClassOptions',
  CHECKING_OUT: 'userIsCheckingOut',
  TRANSACTION_COMPLETE: 'userHasCompletedTransaction',
};

export default class AppState {
  constructor() {
    
    this.status = appStatuses.VIEWING;
    this.selectedLanguage = languages.SPANISH;
    this.flow = flows[languages.SPANISH];

    this.skillLevel = null;
    this.time = [];
    this.locations = [];
    this.date = null;

    this.name = "";
    this.surname = "";
    this.phoneNumber = ""
    this.email = "";
  }
}
