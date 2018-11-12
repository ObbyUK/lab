import languages from './constants/languages';
import flows from './constants/flows';

export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ANWSERING_QUESTIONS: 'userIsAnwseringQuestions',
  VIEWING_CLASS_OPTIONS: 'userIsViewingClassOptions',
  CHECKING_OUT: 'userIsCheckingOut',
  SUBMITTING: 'userIsSubmitting',
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
    this.chosenSession = {};
    this.chosenLocation = {};
    this.date = null;

    this.name = "";
    this.lastName = "";
    this.phoneNumber = ""
    this.email = "";
    this.formError = {
      // code: "",
      // message: "",
      // type: "",
    };
  }
}
