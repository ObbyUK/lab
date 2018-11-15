import regions, { regionNames } from './regions'; 
import timeOfDay, { timeOfDayNames } from './timeOfDay';

export const locations = [
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
];

export const times = [
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
];