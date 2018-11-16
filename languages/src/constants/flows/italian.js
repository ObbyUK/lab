import skillLevels, { levelNames, levelDescriptions } from './../skillLevels';
import { locations, times } from './../locationsAndTimes';
import { appStatuses } from './../../AppState';

var headers = {};
headers[appStatuses.ANWSERING_QUESTIONS] = {
  blurt: "Incredibile!",
  title: "Ready to Learn Italian",
  description: "Tell us a bit more about what you're looking for?",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_OPTIONS] = {
  blurt: 'Buono.',
  title: 'Now select your desired class.',
  // description: "After booking, you can select your teacher, agree on an exact time or go over any requirements if necessary.",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.VIEWING_CLASS_SUMMARY] = {
  blurt: 'Buono.',
  title: 'Now select your desired class.',
  // description: "After booking, you can select your teacher, agree on an exact time or go over any requirements if necessary.",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.CHECKING_OUT] = {
  blurt: 'Quasi lì.',
  title: 'Almost there.',
  src: "/images/header_flow_2.png",
};
headers[appStatuses.TRANSACTION_COMPLETE] = {
  blurt: 'È tutto pronto.',
  title: 'Let’s get to work.',
  src: "/images/header_flow_2.png",
};

var skillLevelDescriptions = {};
skillLevelDescriptions[skillLevels.BEGGINER] = "Italian Beginners 1 aims to provide students with a basic knowledge of Italian and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in Italian on a range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.INTERMEDIATE] = "Italian Beginners 1 aims to provide students with a basic knowledge of Italian and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in Italian on a range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.ADVANCED] = "Italian Beginners 1 aims to provide students with a basic knowledge of Italian and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in Italian on a range of topics relating to everyday situations.";

export default {
  headers,
  famousPerson: 'Monica Bellucci',
  teacher: {},
  levelOptions: [
    {
      title: levelNames[skillLevels.BEGGINER],
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in Italian",
      sessionsPreview: levelDescriptions[skillLevels.BEGGINER].sessionsPreview,
      content: levelDescriptions[skillLevels.BEGGINER].contentList
    },
    {
      title: levelNames[skillLevels.INTERMEDIATE],
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in Italian",
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