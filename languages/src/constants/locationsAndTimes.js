import regions, { regionNames } from './regions'; 
import timeOfDay, { timeOfDayNames } from './timeOfDay';

export const locations = [
  {
    name: regionNames.CENTRAL_LONDON,
    value: regions.CENTRAL_LONDON,
    address: "Oxford Circus, W1S 1YR",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "06/02/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "08/02/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
                    {
            starts: "05/02/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "07/02/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
                    {
            starts: "05/03/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "07/03/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
        ]
      },
      {
        type: timeOfDay.WEEKENDS,
        title: "Weekends",
        label: "(11AM- 12:30PM)",
        options: [
          {
            starts: "13/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          },
          {
            starts: "10/02/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          },
          {
            starts: "10/03/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          },
        ]
      },
    ],
  },
  {
    name: regionNames.CENTRAL_LONDON,
    value: regions.CENTRAL_LONDON,
    address: "Covent Garden, WC2E 7LL",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "15/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "16/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "17/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "15/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "16/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "17/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "18/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
            soldOut: true,
          },
        ]
      },
      {
        type: timeOfDay.WEEKENDS,
        title: "Weekends",
        label: "(11AM- 12:30PM)",
        options: [
          {
            starts: "19/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
            soldOut: true,
          },
          {
            starts: "20/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          }
        ]
      },
    ],
  },
    {
    name: regionNames.CENTRAL_LONDON,
    value: regions.CENTRAL_LONDON,
    address: "Holborn, WC1V 7QH",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "09/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "09/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
        ]
      },
    ],
  },
  {
    name: regionNames.WEST_LONDON,
    value: regions.WEST_LONDON,
    address: "White City, W12 7FP",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "15/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "16/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "17/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "18/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
            soldOut: true,
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "15/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "16/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "17/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
        ]
      },
      {
        type: timeOfDay.WEEKENDS,
        title: "Weekends",
        label: "(11AM- 12:30PM)",
        options: [
          {
            starts: "19/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
            soldOut: true,
          },
          {
            starts: "20/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          }
        ]
      },
    ],
  },
  {
    name: regionNames.NORTH_LONDON,
    value: regions.NORTH_LONDON,
    address: "Kings Cross, N1 9SQ",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "09/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "11/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
            soldOut: true,
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "09/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
        ]
      },
      {
        type: timeOfDay.WEEKENDS,
        title: "Weekends",
        label: "(11AM- 12:30PM)",
        options: [
          {
            starts: "12/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
            soldOut: true,
          },
          {
            starts: "13/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          }
        ]
      },
    ],
  },
  {
    name: regionNames.EAST_LONDON,
    value: regions.EAST_LONDON,
    address: "Shoreditch, EC2A 4HT",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "15/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "16/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "17/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "18/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
            soldOut: true,
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "15/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "16/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "17/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
        ]
      },
      {
        type: timeOfDay.WEEKENDS,
        title: "Weekends",
        label: "(11AM- 12:30PM)",
        options: [
          {
            starts: "19/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
            soldOut: true,
          },
          {
            starts: "20/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          }
        ]
      },
    ],
  },
  {
    name: regionNames.SOUTH_LONDON,
    value: regions.SOUTH_LONDON,
    address: "Brixton, SW9 8BQ",
    lessonsStart: "6:30PM",
    lessonsEnd: "8PM",
    dates: [
      {
        type: timeOfDay.DAYTIME,
        title: "Daytime",
        label: "(12:00PM - 1:30PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "09/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
          },
          {
            starts: "11/01/2019",
            lessonsStart: "12:00PM",
            lessonsEnd: "1:30PM",
            soldOut: true,
          },
        ]
      },
      {
        type: timeOfDay.EVENING,
        title: "Evening",
        label: "(6:30PM - 8PM)",
        options: [
          {
            starts: "08/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "09/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
          {
            starts: "10/01/2019",
            lessonsStart: "6:30PM",
            lessonsEnd: "8PM",
          },
        ]
      },
      {
        type: timeOfDay.WEEKENDS,
        title: "Weekends",
        label: "(11AM- 12:30PM)",
        options: [
          {
            starts: "12/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
            soldOut: true,
          },
          {
            starts: "13/01/2019",
            lessonsStart: "11:00PM",
            lessonsEnd: "12:30PM",
          }
        ]
      },
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