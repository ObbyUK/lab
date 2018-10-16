import languages from './languages';
import skillLevels, { levelNames } from './skillLevels';
import timeOfDay, { timeOfDayNames } from './timeOfDay';
import regions, { regionNames } from './regions';

var flows = {};

flows[languages.SPANISH] = {
  famousPerson: 'Antonio Banderas',
  levelOptions: [
    {
      title: levelNames.BEGGINER,
      value: skillLevels.BEGGINER,
      description: "You know almoust nothing in Spanish",
      sessionsPreview: [
        {
          title: "Pronunciation rules & Grammar",
          text: "You’ll learn how the Spanish alphabet is different than the English one, and how to apply those rules.",
        },
        {
          title: "Greetings & Farewells",
          text: "You’ll learn how to meet & greet people and how to introduce yourself.",
        },
        {
          title: "Basic conversation",
          text: "When you’re done, you’ll be able to have a basic conversation in fluent Spanish.",
        },
      ]
    },
    {
      title: levelNames.INTERMEDIATE,
      value: skillLevels.INTERMEDIATE,
      description: "You can have a decent conversation in Spanish",
      sessionsPreview: [
        {
          title: "Pronunciation rules & Grammar",
          text: "You’ll learn how the Spanish alphabet is different than the English one, and how to apply those rules.",
        },
        {
          title: "Greetings & Farewells",
          text: "You’ll learn how to meet & greet people and how to introduce yourself.",
        },
        {
          title: "Basic conversation",
          text: "When you’re done, you’ll be able to have a basic conversation in fluent Spanish.",
        },
      ]
    },
    {
      title: levelNames.ADVANCED,
      value: skillLevels.ADVANCED,
      description: "You’re almost there, but want to get perfect.",
      sessionsPreview: [
        {
          title: "Pronunciation rules & Grammar",
          text: "You’ll learn how the Spanish alphabet is different than the English one, and how to apply those rules.",
        },
        {
          title: "Greetings & Farewells",
          text: "You’ll learn how to meet & greet people and how to introduce yourself.",
        },
        {
          title: "Basic conversation",
          text: "When you’re done, you’ll be able to have a basic conversation in fluent Spanish.",
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
    {
      name: regionNames.GREATER_LONDON,
      value: regions.GREATER_LONDON,
      addresses: []
    },
  ],
  timeOptions: [
    {
      title: timeOfDayNames.DAYTIME,
      value: timeOfDay.DAYTIME,
      description: "9AM - 5PM",
    },
    {
      title: timeOfDayNames.EVENING,
      value: timeOfDay.EVENING,
      description: "5PM onwards",
    },
    {
      title: timeOfDayNames.WEEKENDS,
      value: timeOfDay.WEEKENDS,
    }
  ]
};

export default flows;