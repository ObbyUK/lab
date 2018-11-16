import skillLevels, { levelNames, levelDescriptions } from './../skillLevels';
import { locations, times } from './../locationsAndTimes';
import { appStatuses } from './../../AppState';

var headers = {};
headers[appStatuses.ANWSERING_QUESTIONS] = {
  blurt: "Unglaublich!",
  title: "Ready to Learn German",
  description: "Tell us a bit more about what you're looking for?",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_OPTIONS] = {
  blurt: 'Sehr gut.',
  title: 'Now select your desired class.',
  // description: "After booking, you can select your teacher, agree on an exact time or go over any requirements if necessary.",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_SUMMARY] = {
  blurt: 'Sehr gut.',
  title: 'Now select your desired class.',
  // description: "After booking, you can select your teacher, agree on an exact time or go over any requirements if necessary.",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.CHECKING_OUT] = {
  blurt: 'Fast da.',
  title: 'Almost there!',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.TRANSACTION_COMPLETE] = {
  blurt: 'Alles ist bereit.',
  title: 'Let’s get to work.',
  src: "/images/header_flow_2.png",
};

var skillLevelDescriptions = {};
skillLevelDescriptions[skillLevels.BEGGINER] = "German Beginners 1 aims to provide students with a basic knowledge of German and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in German on a range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.INTERMEDIATE] = "German Beginners 1 aims to provide students with a basic knowledge of German and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in German on a range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.ADVANCED] = "German Beginners 1 aims to provide students with a basic knowledge of German and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in German on a range of topics relating to everyday situations.";

export default {
  headers,
  famousPerson: 'Ludwig van Beethoven',
  levelOptions: [
    {
      title: levelNames[skillLevels.BEGGINER],
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in German",
      sessionsPreview: levelDescriptions[skillLevels.BEGGINER].sessionsPreview,
      content: levelDescriptions[skillLevels.BEGGINER].contentList
    },
    {
      title: levelNames[skillLevels.INTERMEDIATE],
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in German",
      sessionsPreview: levelDescriptions[skillLevels.INTERMEDIATE].sessionsPreview,
      content: levelDescriptions[skillLevels.INTERMEDIATE].contentList
    },
    {
      title: levelNames[skillLevels.ADVANCED],
      value: skillLevels.ADVANCED,
      description: "You’re almost there, but want to get perfect.",
      sessionsPreview: levelDescriptions[skillLevels.ADVANCED].sessionsPreview,
      content: levelDescriptions[skillLevels.ADVANCED].contentList
    }
  ],
  locationOptions: locations,
  timeOptions: times
};