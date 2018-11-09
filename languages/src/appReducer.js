import { pipe, assoc, identity, T, cond, propEq } from 'ramda';

// Lib & Constants
import isActionType from './lib/isActionType';
import toggleValueFromCheckboxArray from './lib/toggleValueFromCheckboxArray';
import flows from './constants/flows';
// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';


const viewingReducer = cond([
  [isActionType(appActions.CHOOSE_LANGUAGE), chooseLanguage],
  [T, identity]
]);

const anwseringQuestionsReducer = cond([
  [isActionType(appActions.SELECT_SKILL_LEVEL), selectSkillLevel],
  [isActionType(appActions.SELECT_TIME), toggleTime],
  [isActionType(appActions.TOGGLE_LOCATION), toggleLocation],
  [isActionType(appActions.SUBMIT_QUESTIONS), submitQuestions],
  [T, identity]
]);

const viewingClassOptionsReducer = cond([
  [isActionType(appActions.CHOOSE_DATE), chooseDate],
  [T, identity]
]);

const checkingOutReducer = cond([
  [isActionType(appActions.TYPE_FIRST_NAME), typeName],
  [isActionType(appActions.TYPE_LAST_NAME), typeLastName],
  [isActionType(appActions.TYPE_EMAIL), typeEmail],
  [isActionType(appActions.TYPE_PHONE_NUMBER), typePhoneNumber],
  [isActionType(appActions.SUBMIT_PAID_SUBSCRIPTION), submitPaidSubscription],
  [T, identity]
]);

const submittingReducer = cond([
  [isActionType(appActions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE), submitedPaidSubscription],
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
    [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
    [isActionType(appActions.VIEW_READY_TO_LEARN_PAGE), viewReadyToLearnPage],

    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [propEq('status', appStatuses.ANWSERING_QUESTIONS), anwseringQuestionsReducer],
    [propEq('status', appStatuses.VIEWING_CLASS_OPTIONS), viewingClassOptionsReducer],
    [propEq('status', appStatuses.CHECKING_OUT), checkingOutReducer],
    [propEq('status', appStatuses.SUBMITTING), submittingReducer],

    [T, viewingReducer]
  ])(state, action);


function viewLandingPage(state) {
  return assoc(
    'status',
    appStatuses.VIEWING,
    state
  );
}

function viewReadyToLearnPage(state, { payload }) {
  return {
    "status":"userIsCheckingOut",
    "selectedLanguage":"italian",
    "flow":{
       "headers":{
          "userIsAnwseringQuestions":{
             "blurt":"Incredibile!",
             "title":"Ready to Learn Italian",
             "description":"Tell us a bit more about what you're looking for?",
             "src":"/images/header_flow.png"
          },
          "userIsViewingClassOptions":{
             "blurt":"Buono.",
             "title":"Now select your desired class.",
             "src":"/images/header_flow_2.png"
          },
          "userIsCheckingOut":{
             "blurt":"È tutto pronto.",
             "title":"Let’s get to work.",
             "src":"/images/header_flow_3.png"
          },
          "userHasCompletedTransaction":{
             "blurt":"È tutto pronto.",
             "title":"Let’s get to work.",
             "src":"/images/header_flow_3.png"
          }
       },
       "famousPerson":"Monica Bellucci",
       "levelOptions":[
          {
             "title":"Beginner",
             "value":"beginner",
             "description":"You know almost nothing in Italian",
             "sessionsPreview":[
                {
                   "title":"Pronunciation rules & Grammar",
                   "text":"You’ll learn how the Italian alphabet is different than the English one, and how to apply those rules."
                },
                {
                   "title":"Greetings & Farewells",
                   "text":"You’ll learn how to meet & greet people and how to introduce yourself."
                },
                {
                   "title":"Basic conversation",
                   "text":"When you’re done, you’ll be able to have a basic conversation in Italian."
                }
             ]
          },
          {
             "title":"Intermediate",
             "value":"intermediate",
             "description":"You can have a decent conversation in Italian",
             "sessionsPreview":[
                {
                   "title":"Improving conversations",
                   "text":"Get comfortable with spontaneous conversations, such as what you do in your free time or your summer plans."
                },
                {
                   "title":"Getting around when travelling",
                   "text":"Learn to navigate your way around a new place, ask for sightseeing places and discuss restaurant tips with locals."
                },
                {
                   "title":"Basic writing",
                   "text":"Understand and write descriptions of events, feelings and wishes in emails, notes and messages."
                }
             ]
          },
          {
             "title":"Advanced",
             "value":"advanced",
             "description":"You’re almost there, but want to get perfect.",
             "sessionsPreview":[
                {
                   "title":"Almost fluent",
                   "text":"Express yourself fluently and spontaneously on a wide range of topics of increasingly complex nature."
                },
                {
                   "title":"Express yourself clearly",
                   "text":"Present clear, in-depth descriptions of subjects, developing particular points and concluding appropriately."
                },
                {
                   "title":"Advanced writing",
                   "text":"Learn to express yourself clearly in well-written text, such as a work report or a essay."
                }
             ]
          }
       ],
       "locationOptions":[
          {
             "name":"Central London",
             "value":"Central London",
             "address":"Holborn, WC1V 7QH",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "options":[
                {
                   "starts":"08/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Tuesdays"
                },
                {
                   "starts":"10/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Thursdays"
                }
             ]
          },
          {
             "name":"West London",
             "value":"West London",
             "address":"White City, W12 7FP",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "options":[
                {
                   "starts":"08/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Tuesdays"
                },
                {
                   "starts":"10/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Thursdays"
                }
             ]
          },
          {
             "name":"North London",
             "value":"North London",
             "address":"Kings Cross, N1 9SQ",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "options":[
                {
                   "starts":"08/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Tuesdays"
                },
                {
                   "starts":"10/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Thursdays"
                }
             ]
          },
          {
             "name":"East London",
             "value":"East London",
             "address":"Shoreditch, EC2A 4HT",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "options":[
                {
                   "starts":"08/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Tuesdays"
                },
                {
                   "starts":"10/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Thursdays"
                }
             ]
          },
          {
             "name":"South London",
             "value":"South London",
             "address":"Brixton, SW9 8BQ",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "options":[
                {
                   "starts":"08/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Tuesdays"
                },
                {
                   "starts":"10/01/2019",
                   "lessonsStart":"6:30PM",
                   "lessonsEnd":"8PM",
                   "lessonDayName":"Thursdays"
                }
             ]
          }
       ],
       "timeOptions":[
          {
             "name":"Daytime",
             "value":"daytime",
             "description":"9AM - 5PM"
          },
          {
             "name":"Evening",
             "value":"evening",
             "description":"5PM onwards"
          },
          {
             "name":"Weekends",
             "value":"weekends"
          }
       ]
    },
    "skillLevel":"beginner",
    "time":[
       "evening"
    ],
    "locations":[
       "Central London",
       "West London"
    ],
    "chosenSession":{
       "starts":"08/01/2019",
       "lessonsStart":"6:30PM",
       "lessonsEnd":"8PM",
       "lessonDayName":"Tuesdays"
    },
    "chosenLocation":{
       "name":"Central London",
       "value":"Central London",
       "address":"Holborn, WC1V 7QH",
       "lessonsStart":"6:30PM",
       "lessonsEnd":"8PM",
       "options":[
          {
             "starts":"08/01/2019",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "lessonDayName":"Tuesdays"
          },
          {
             "starts":"10/01/2019",
             "lessonsStart":"6:30PM",
             "lessonsEnd":"8PM",
             "lessonDayName":"Thursdays"
          }
       ]
    },
    "date":"08/01/2019",
    "name":"",
    "lastName":"",
    "phoneNumber":"",
    "email":""
 };
  return pipe(
    assoc('selectedLanguage', payload.language),
    assoc('flow', flows[payload.language]),
    assoc('status', appStatuses.ANWSERING_QUESTIONS),
  )(state);
}

function chooseLanguage(state, { payload }) {
  return pipe(
    assoc('selectedLanguage', payload.language),
    assoc('flow', flows[payload.language]),
    assoc('status', appStatuses.ANWSERING_QUESTIONS)
  )(state);
}

function selectSkillLevel(state, { payload }) {
  return assoc('skillLevel', payload.skillLevel, state);
}

function toggleTime(state, { payload }) {
  return assoc(
    'time', 
    toggleValueFromCheckboxArray(payload.time, state.time),
    state
  );
}

function toggleLocation(state, { payload }) {
  return assoc(
    'locations', 
    toggleValueFromCheckboxArray(payload.location, state.locations), 
    state
  );
}

function submitQuestions(state) {
  return assoc(
    'status', 
    appStatuses.VIEWING_CLASS_OPTIONS, 
    state
  );
}

function chooseDate(state, { payload }) {
  return pipe(
    assoc('status', appStatuses.CHECKING_OUT),
    assoc('chosenSession', payload.session),
    assoc('chosenLocation', payload.location),
    assoc('date', payload.session.starts),
  )(state);
}

function typeName(state, { payload }) {
  return assoc(
    'name', 
    payload.name, 
    state
  );
}

function typeLastName(state, { payload }) {
  return assoc(
    'lastName', 
    payload.lastName, 
    state
  );
}

function typePhoneNumber(state, { payload }) {
  return assoc(
    'phoneNumber', 
    payload.phoneNumber, 
    state
  );
}

function typeEmail(state, { payload }) {
  return assoc(
    'email',
    payload.email,
    state
  );
}

function submitPaidSubscription(state, { payload }) {
  return pipe(
    assoc('status', appStatuses.SUBMITTING)
  )(state);
}

function submitedPaidSubscription(state) {
  return assoc(
    'status',
    appStatuses.TRANSACTION_COMPLETE,
    state
  );
}
