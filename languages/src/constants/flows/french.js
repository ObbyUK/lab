import skillLevels, { levelNames, levelDescriptions } from './../skillLevels';
import { locations, times } from './../locationsAndTimes';
import { appStatuses } from './../../AppState';

var headers = {};
headers[appStatuses.ANWSERING_QUESTIONS] = {
  blurt: "Incroyable!",
  title: "Ready to Learn French",
  description: "Tell us a bit more about what you're looking for?",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_OPTIONS] = {
  blurt: 'Bien.',
  title: 'Now select your desired class.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_SUMMARY] = {
  blurt: 'Bien.',
  title: 'Now select your desired class.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.CHECKING_OUT] = {
  blurt: 'Presque là.',
  title: 'Almost there.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.TRANSACTION_COMPLETE] = {
  blurt: 'C\'est tout bon.',
  title: 'Let’s get to work.',
  src: "/images/header_flow_2.png",
};

export default {
  headers,
  famousPerson: 'Jean Reno',
  levelOptions: [
    {
      title: levelNames.BEGGINER,
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in French",
      sessionsPreview: levelDescriptions[skillLevels.BEGGINER].sessionsPreview,
      content: levelDescriptions[skillLevels.BEGGINER].content
    },
    {
      title: levelNames.INTERMEDIATE,
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in French",
      sessionsPreview: levelDescriptions[skillLevels.INTERMEDIATE].sessionsPreview,
      content: levelDescriptions[skillLevels.INTERMEDIATE].content
    },
    {
      title: levelNames.ADVANCED,
      value: skillLevels.ADVANCED,
      description: "You’re almost there, but want to get perfect.",
      sessionsPreview: levelDescriptions[skillLevels.ADVANCED].sessionsPreview,
      content: levelDescriptions[skillLevels.ADVANCED].content
    }
  ],
  locationOptions: locations,
  timeOptions: times
};