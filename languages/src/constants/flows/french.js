import skillLevels, { levelNames, levelDescriptions } from './../skillLevels';
import languages from './../languages';
import teachers from './../teachers';
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
  title: "Let's meet your teacher",
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

var skillLevelDescriptions = {};
skillLevelDescriptions[skillLevels.BEGGINER] = "French Beginners 1 aims to provide students with a basic knowledge of French and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in French on a range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.INTERMEDIATE] = "French Beginners 1 aims to provide students with a basic knowledge of French and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in French on a range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.ADVANCED] = "French Beginners 1 aims to provide students with a basic knowledge of French and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in French on a range of topics relating to everyday situations.";

export default {
  headers,
  famousPerson: 'Jean Reno',
  teacher: teachers[languages.FRENCH],
  levelOptions: [
    {
      title: levelNames[skillLevels.BEGGINER],
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in French",
      sessionsPreview: levelDescriptions[skillLevels.BEGGINER].sessionsPreview,
      content: levelDescriptions[skillLevels.BEGGINER].contentList
    },
    {
      title: levelNames[skillLevels.INTERMEDIATE],
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in French",
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
  timeOptions: times,
  skillLevelDescriptions,
  teachingMethodDescription: "The course is taught mainly in French and works on the four skills of listening, speaking, reading and writing, with the main emphasis on speaking. Students engage in interactive language activities, participating in group and pair work to practice vocabulary, expressions and grammar structures.",
  feedbackSessionsDescription: "There is an overview, consolidation and feedback session in the final week, concentrating on the material covered in the term. By the end of the first term, the student is able to read, understand and communicate using French in very basic situations. Students should be able to understand simple oral and written texts and understand specific information on simple topics."
};