

export const appStatuses = {
  VIEWING: 'userIsViewingApp',
};

export default class AppState {
  constructor() {
    this.status = appStatuses.VIEWING;
  }
}
