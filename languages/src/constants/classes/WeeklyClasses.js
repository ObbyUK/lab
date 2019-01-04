import regions, { regionNames } from './../regions'; 
import timeOfDay from './../timeOfDay';

export default [
  {
    name: regionNames.CENTRAL_LONDON,
    value: regions.CENTRAL_LONDON,
    address: "Oxford Circus, W1S 1YR",
    mapsLink: "https://goo.gl/maps/cmSBWg6z7Xu",
    dates: [
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
    name: regionNames.CENTRAL_LONDON,
    value: regions.CENTRAL_LONDON,
    address: "Covent Garden, WC2E 7LL",
    mapsLink: "https://goo.gl/maps/z2Yq1qL5hdr",
    dates: [
      {
        starts: "15/01/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "17/01/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
                {
        starts: "12/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "14/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
                {
        starts: "12/03/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "14/03/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
    ]
  },
    {
    name: regionNames.CENTRAL_LONDON,
    value: regions.CENTRAL_LONDON,
    address: "Holborn, WC1V 7QH",
    mapsLink: "https://goo.gl/maps/ELfyCCte2vu",
    dates: [
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
        soldOut: true,
      },
      {
        starts: "07/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
        soldOut: true,
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
    name: regionNames.WEST_LONDON,
    value: regions.WEST_LONDON,
    address: "White City, W12 7FP",
    mapsLink: "https://goo.gl/maps/izBbTMMg7F92",
    dates: [
      {
        starts: "15/01/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "17/01/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
                {
        starts: "12/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "14/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
                {
        starts: "12/03/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "14/03/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
    ]
  },
  {
    name: regionNames.NORTH_LONDON,
    value: regions.NORTH_LONDON,
    address: "Kings Cross, N1 9SQ",
    mapsLink: "https://goo.gl/maps/awAeAPJf6rS2",
    dates: [
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
        soldOut: true,
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
    name: regionNames.EAST_LONDON,
    value: regions.EAST_LONDON,
    address: "Shoreditch, EC2A 4HT",
    mapsLink: "https://goo.gl/maps/iRgKSeqhECr",
    dates: [
      {
        starts: "15/01/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "17/01/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
        soldOut: true,
      },
                {
        starts: "12/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "14/02/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
                {
        starts: "12/03/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
      {
        starts: "14/03/2019",
        lessonsStart: "6:30PM",
        lessonsEnd: "8PM",
      },
    ]
  },
  {
    name: regionNames.SOUTH_LONDON,
    value: regions.SOUTH_LONDON,
    address: "Brixton, SW9 8BQ",
    mapsLink: "https://goo.gl/maps/PS5xLzzHVEw",
    dates: [
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
        soldOut: true,
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
  }
];