import skillLevels, { levelNames, levelDescriptions } from './../skillLevels';
import languages from './../languages';
import { locations, times } from './../locationsAndTimes';
import teachers from './../teachers';
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

var skillLevelDescriptions = {};
skillLevelDescriptions[skillLevels.BEGGINER] = "Spanish Beginners 1 aims to provide students with a basic knowledge of Spanish and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in Spanish on a limited range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.INTERMEDIATE] = "Spanish Beginners 1 aims to provide students with a basic knowledge of Spanish and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in Spanish on a limited range of topics relating to everyday situations.";
skillLevelDescriptions[skillLevels.ADVANCED] = "Spanish Beginners 1 aims to provide students with a basic knowledge of Spanish and focuses on the acquisition of practical communicative skills. It covers basic grammar and essential vocabulary, allowing participants to communicate effectively and with confidence in Spanish on a limited range of topics relating to everyday situations.";

export default {
  headers: headers,
  famousPerson: 'Antonio Banderas',
  teacher: teachers[languages.SPANISH],
  levelOptions: [
    {
      title: levelNames[skillLevels.BEGGINER],
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in Spanish",
      sessionsPreview: levelDescriptions[skillLevels.BEGGINER].sessionsPreview,
      content: levelDescriptions[skillLevels.BEGGINER].content
    },
    {
      title: levelNames[skillLevels.INTERMEDIATE],
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in Spanish",
      sessionsPreview: levelDescriptions[skillLevels.INTERMEDIATE].sessionsPreview,
      content: levelDescriptions[skillLevels.INTERMEDIATE].content
    },
    {
      title: levelNames[skillLevels.ADVANCED],
      value: skillLevels.ADVANCED,
      description: "You’re almost there, but want to get perfect.",
      sessionsPreview: levelDescriptions[skillLevels.ADVANCED].sessionsPreview,
      content: levelDescriptions[skillLevels.ADVANCED].content
    }
  ],
  locationOptions: locations,
  timeOptions: times,
  skillLevelDescriptions,
  teachingMethodDescription: "The course is taught mainly in Spanish and works on the four skills of listening, speaking, reading and writing, with the main emphasis on speaking. Students engage in interactive language activities, participating in group and pair work to practice vocabulary, expressions and grammar structures.",
  feedbackSessionsDescription: "There is an overview, consolidation and feedback session in the final week, concentrating on the material covered in the term. By the end of the first term, the student is able to read, understand and communicate using Spanish in very basic situations. Students should be able to understand simple oral and written texts and understand specific information on simple topics."
};