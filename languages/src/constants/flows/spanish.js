import skillLevels, { levelNames, levelDescriptions } from './../skillLevels';
import { locations, times } from './../locationsAndTimes';
import { appStatuses } from './../../AppState';

var headers = {};
headers[appStatuses.ANWSERING_QUESTIONS] = {
  blurt: "¡Increíble!",
  title: "Ready to Learn Spanish",
  description: "Tell us a bit more about what you're looking for?",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_OPTIONS] = {
  blurt: 'Bueno.',
  title: 'Now select your desired class.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_SUMMARY] = {
  blurt: 'Bueno.',
  title: 'Now select your desired class.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.CHECKING_OUT] = {
  blurt: 'Casi allí.',
  title: 'Almost there.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.TRANSACTION_COMPLETE] = {
  blurt: 'Todo bien.',
  title: 'Let’s get to work.',
  src: "/images/header_flow_2.png",
};

export default {
  headers: headers,
  famousPerson: 'Antonio Banderas',
  levelOptions: [
    {
      title: levelNames.BEGGINER,
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in Spanish",
      sessionsPreview: levelDescriptions[skillLevels.BEGGINER].sessionsPreview,
      content: levelDescriptions[skillLevels.BEGGINER].content
    },
    {
      title: levelNames.INTERMEDIATE,
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in Spanish",
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