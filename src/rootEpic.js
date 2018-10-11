import { combineEpics } from 'redux-observable';

import redirectOnChooseLanguage from './epics/redirectOnChooseLanguage';

export default combineEpics(redirectOnChooseLanguage);
