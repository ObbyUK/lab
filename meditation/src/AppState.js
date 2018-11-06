export const appStatuses = {
  VIEWING: 'userIsViewingApp',
  ENTERING_CONTACT_INFORMATION: 'userIsEnteringContactInformation',
  SUBMITTED: 'userHasSubmittedInformation',
};

export default class AppState {
  constructor() {
    this.status = appStatuses.VIEWING;
    this.name = "";
    this.email = "";
    this.date = "";
    this.chosenClass = {};
  }
}
