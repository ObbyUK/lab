import languages from './languages';

const teachers = {};
teachers[languages.SPANISH] = {
  name: "Louise Fernández",
  nationality: "spanish",
  description: "Louise has been teaching Spanish since 2008 when she moved from Barcelona to London. Since then, she helped hundreds of people transition from zero Spanish to fluent. Her teaching style is simple, organised and fun.",
  avatar: "/images/teacher-1.png",
  // 10 = 5 starts
  rating: 10,
  reviews: [
    {
      image: '/images/astrid-avatar.jpg',
      name: 'Astrid',
      label: "moved to spain",
      text: 'The company I work for just opened an office in Italy, and it felt natural to learn a bit of italian to better communicate with my italian colleagues. Doing this on Obby felt natural, and Vicenzo is definitely one of the nicest and most patient teachers ever. I would recommend this to anyone!',
    },
  ],
};
teachers[languages.FRENCH] = {};
teachers[languages.ITALIAN] = {};
teachers[languages.GERMAN] = {};

export default teachers;

