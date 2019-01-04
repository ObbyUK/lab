import languages from './constants/languages';
import flows from './constants/flows';

export const emailPopupStatuses = {
  OPEN: 'emailPopupIsOpen',
  CLOSED: 'emailPopupIsClosed',
  SUBMITTED: 'emailPopupIsSubmitted',
};

export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ANWSERING_QUESTIONS: 'userIsAnwseringQuestions',
  VIEWING_CLASS_OPTIONS: 'userIsViewingClassOptions',
  VIEWING_CLASS_SUMMARY: 'userIsViewingChosenClassSummary',
  CHECKING_OUT: 'userIsCheckingOut',
  SUBMITTING: 'userIsSubmitting',
  TRANSACTION_COMPLETE: 'userHasCompletedTransaction',
};

export default class AppState {
  constructor() {
    // Display data
    this.status = appStatuses.VIEWING;
    this.flow = flows[languages.SPANISH];
    this.emailPopupStatus = emailPopupStatuses.CLOSED;
    this.emailPopup = {
      title: "",
      description: "",
      submittedTitle: "",
      submittedDescription: "",
      emailText: ""
    };
  
    // Questionare
    this.selectedLanguage = null;
    this.courseType = null;
    this.skillLevel = null;
    this.time = [];
    this.locations = [];
    
    // Selected date data
    this.date = null;
    this.dates = [];
    this.region = null;
    this.address = null;
    this.startTime = null;
    this.endTime = null;

    // Checkout info
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
