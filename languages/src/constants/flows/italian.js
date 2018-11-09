import skillLevels, { levelNames } from './../skillLevels';
import timeOfDay, { timeOfDayNames } from './../timeOfDay';
import regions, { regionNames } from './../regions';
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

export default {
  headers,
  famousPerson: 'Monica Bellucci',
  levelOptions: [
    {
      title: levelNames.BEGGINER,
      value: skillLevels.BEGGINER,
      description: "You know almost nothing in Italian",
      sessionsPreview: [
        {
          title: "Pronunciation rules & Grammar",
          text: "You’ll learn how the Italian alphabet is different than the English one, and how to apply those rules.",
        },
        {
          title: "Greetings & Farewells",
          text: "You’ll learn how to meet & greet people and how to introduce yourself.",
        },
        {
          title: "Basic conversation",
          text: "When you’re done, you’ll be able to have a basic conversation in Italian.",
        },
      ]
    },
    {
      title: levelNames.INTERMEDIATE,
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in Italian",
      sessionsPreview: [
        {
          title: 'Improving conversations',
          text: 'Get comfortable with spontaneous conversations, such as what you do in your free time or your summer plans.',
        },
        {
          title: 'Getting around when travelling',
          text: 'Learn to navigate your way around a new place, ask for sightseeing places and discuss restaurant tips with locals.',
        },
        {
          title: 'Basic writing',
          text: 'Understand and write descriptions of events, feelings and wishes in emails, notes and messages.',
        },
      ]
    },
    {
      title: levelNames.ADVANCED,
      value: skillLevels.ADVANCED,
      description: "You’re almost there, but want to get perfect.",
      sessionsPreview: [
        {
          title: 'Almost fluent',
          text: 'Express yourself fluently and spontaneously on a wide range of topics of increasingly complex nature.',
        },
        {
          title: 'Express yourself clearly',
          text: 'Present clear, in-depth descriptions of subjects, developing particular points and concluding appropriately.',
        },
        {
          title: 'Advanced writing',
          text: 'Learn to express yourself clearly in well-written text, such as a work report or a essay.',
        },
      ]
    }
  ],
  locationOptions: [
    {
      name: regionNames.CENTRAL_LONDON,
      value: regions.CENTRAL_LONDON,
      address: "Holborn, WC1V 7QH",
      lessonsStart: "6:30PM",
      lessonsEnd: "8PM",
      options: [
        {
          starts: "08/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Tuesdays",
        }, 
        {
          starts: "10/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Thursdays",
        }
      ],
    },
    {
      name: regionNames.WEST_LONDON,
      value: regions.WEST_LONDON,
      address: "White City, W12 7FP",
      lessonsStart: "6:30PM",
      lessonsEnd: "8PM",
      options: [
        {
          starts: "08/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Tuesdays",
        }, 
        {
          starts: "10/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Thursdays",
        }
      ],
    },
    {
      name: regionNames.NORTH_LONDON,
      value: regions.NORTH_LONDON,
      address: "Kings Cross, N1 9SQ",
      lessonsStart: "6:30PM",
      lessonsEnd: "8PM",
      options: [
        {
          starts: "08/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Tuesdays",
        }, 
        {
          starts: "10/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Thursdays",
        }
      ],
    },
    {
      name: regionNames.EAST_LONDON,
      value: regions.EAST_LONDON,
      address: "Shoreditch, EC2A 4HT",
      lessonsStart: "6:30PM",
      lessonsEnd: "8PM",
      options: [
        {
          starts: "08/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Tuesdays",
        }, 
        {
          starts: "10/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Thursdays",
        }
      ],
    },
    {
      name: regionNames.SOUTH_LONDON,
      value: regions.SOUTH_LONDON,
      address: "Brixton, SW9 8BQ",
      lessonsStart: "6:30PM",
      lessonsEnd: "8PM",
      options: [
        {
          starts: "08/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Tuesdays",
        }, 
        {
          starts: "10/01/2019",
          lessonsStart: "6:30PM",
          lessonsEnd: "8PM",
          lessonDayName: "Thursdays",
        }
      ],
    }
  ],
  timeOptions: [
    {
      name: timeOfDayNames.DAYTIME,
      value: timeOfDay.DAYTIME,
      description: "9AM - 5PM",
    },
    {
      name: timeOfDayNames.EVENING,
      value: timeOfDay.EVENING,
      description: "5PM onwards",
    },
    {
      name: timeOfDayNames.WEEKENDS,
      value: timeOfDay.WEEKENDS,
    }
  ]
};