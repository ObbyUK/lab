export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ENTERING_CONTACT_INFORMATION: 'userIsEnteringContactInformation',
  CHECKING_OUT: 'userIsCheckingOut',
  SUBMITTING: 'userIsSubmitting',
  TRANSACTION_COMPLETE: 'userHasCompletedTransaction',
};

export default class AppState {
  constructor() {
    this.status = appStatuses.VIEWING;

    this.chosenSession = {};
    this.chosenLocation = {};
    this.date = "";

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
