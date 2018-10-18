import skillLevels, { levelNames } from './../skillLevels';
import timeOfDay, { timeOfDayNames } from './../timeOfDay';
import regions, { regionNames } from './../regions';
import { appStatuses } from './../../AppState';

var headers = {};
headers[appStatuses.ANWSERING_QUESTIONS] = {
  blurt: "Incredibile!",
  title: "Ready to Learn Italian",
  description: "Tell us a bit more about what you're looking for?",
  src: "/images/header_flow.png",
};
headers[appStatuses.ENTERING_CONTACT_INFORMATION] = {
  blurt: 'Buono.',
  title: 'Here are your options.',
  description: "After booking, you can select your teacher, agree on an exact time or go over any requirements if necessary.",
  src: "/images/header_flow_2.png",
};
headers[appStatuses.SUBMITTED] = {
  blurt: 'È tutto pronto.',
  title: 'Let’s get to work.',
  src: "/images/header_flow_3.png",
};

export default {
  headers,
  famousPerson: 'Monica Bellucci',
  levelOptions: [
    {
      title: levelNames.BEGGINER,
      value: skillLevels.BEGGINER,
      description: "You know almoust nothing in Italian",
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
          text: "When you’re done, you’ll be able to have a basic conversation in fluent Italian.",
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
      addresses: [
        'Covent Garden WC2',
        'Westminster SW1',
        'Blackfriars EC4',
      ]
    },
    {
      name: regionNames.WEST_LONDON,
      value: regions.WEST_LONDON,
      addresses: [
        'Hounslow W4',
        'Acton W3',
        'Notting Hill W8',
        'Fulham SW6',
      ]
    },
    {
      name: regionNames.SOUTH_LONDON,
      value: regions.SOUTH_LONDON,
      addresses: [
        'Putney SW15',
        'Battersea SW8',
        'Brixton SW4',
      ]
    },
    {
      name: regionNames.EAST_LONDON,
      value: regions.EAST_LONDON,
      addresses: [
        'Whitechapel E1',
      ]
    },
    {
      name: regionNames.NORTH_LONDON,
      value: regions.NORTH_LONDON,
      addresses: [
        'Hoxton N1',
        'Camden Town NW1',
      ]
    },
    // {
    //   name: regionNames.GREATER_LONDON,
    //   value: regions.GREATER_LONDON,
    //   addresses: []
    // },
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