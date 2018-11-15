import languages from './languages';

const teachers = {};
teachers[languages.SPANISH] = {
  name: "Pedro",
  nationality: "Spanish",
  description: "I believe that learning Spanish (or any language in fact) should be considered as much entertainment as education and I take great pride knowing that my students are developing such an important skill and I am able to help them on that journey!",
  avatar: "/images/Pedro_Spanish.png",
  // 10 = 5 starts
  rating: 10,
  reviews: [
    {
      image: '/images/User_Spanish_Paul.png',
      name: 'Paul',
      label: "Fell in love with Spanish on holiday",
      text: 'I was a complete beginner with Spanish, I looked around for a dedicated Spanish tutor. Pedro was a great choice - he has endless patience. Pedro has enabled me to progress from a simple "hola" to understanding speech and the written word whilst learning grammar and vocabulary. I have the confidence to speak Spanish without hesitating, as my accent and pronunciation is good enough thanks to Pedro.',
    },
    {
      image: '/images/florien-avatar.png',
      name: 'Florien',
      label: "Brushed up on her studies",
      text: 'I took Spanish for GCSE and A-Levels but lost pretty much everything I learned. After a trip to Madrid last summer I realised I couldn’t even order a Sangria so I made it my mission to learn Spanish again. And it worked! Thanks Pedro!',
    }
  ],
};
teachers[languages.FRENCH] = {
  name: "Anais",
  nationality: "French",
  description: "I understand how important it can be to learn another language, whether for a job opportunity, for travelling and discovering the world, or just as a hobby. We must give ourselves the means to realise our dreams and desires and it is never too late to realise yours!",
  avatar: "/images/Anais_French.png",
  // 10 = 5 starts
  rating: 10,
  reviews: [
    {
      image: '/images/User_French_Nick.png',
      name: 'Nick',
      label: "Learned French as a hobby",
      text: 'As a pastry maker, French cuisine is incredibly important to me - so I decided to follow my dream of living in France by taking a course. Anais was perfect! Merci Anais!',
    },
    {
      image: '/images/User_French_Katie.png',
      name: 'Katie',
      label: "Learned French before a summer in Fance",
      text: 'I have been learning French with Anaïs now for 4 months. I started from scratch, as an absolute beginner, and during that time I learnt the structure of the language, how to form sentences, pronunciation, masculine/feminine, verbs, nouns, phrases, and more. As with learning anything new, the teacher is 90% of the motivation. In this, I have found Anaïs to be friendly, personable and patient. I can highly recommend her to you.',
    }
  ],
};
teachers[languages.ITALIAN] = {
  name: "Valeria",
  nationality: "Italian",
  description: "I love sharing my native language with others keen to learn. For me, the main thing is that everyone gets the outcomes that they want and I take personal pride in all my students achieving their goals.",
  avatar: "/images/Valeria_Italian.png",
  // 10 = 5 starts
  rating: 10,
  reviews: [
    {
      image: '/images/astrid-avatar.jpg',
      name: 'Astrid',
      label: "Learned Italian for work",
      text: 'The company I work for just opened an office in Italy, and it felt natural to learn a bit of italian to better communicate with my italian colleagues. Doing this on Obby felt natural, and Valeria is definitely one of the nicest and most patient teachers ever. I would recommend this to anyone!',
    },
    {
      image: '/images/User_Italian_Bianca.png',
      name: 'Bianca',
      label: "Learned Italian for a loved one",
      text: 'My future husband is Italian so I wanted to do something nice to surprise him for our wedding. Italian families are so close and I wanted to be a part of that, so I took a course with Valeria and it was great!',
    }
  ],
};
teachers[languages.GERMAN] = {
  name: "Katja",
  nationality: "German",
  description: "Helping my students to improve their rusty German skills, learn the language from scratch, or pass that tough exam makes me very proud. It just goes to show that a skilful teacher and a willing student are the perfect ingredients to successful learning.",
  avatar: "/images/Katja_German.png",
  // 10 = 5 starts
  rating: 10,
  reviews: [
    {
      image: '/images/User_German_Phillippa.png',
      name: 'Phillippa',
      label: "Learned German as a hobby",
      text: 'In every way Katja’s lessons are first class. She is punctual and friendly, patient and respectful, encouraging and challenging, focussed and warm, and she makes it clear she is on your side and wants to help you. I recommend her without reservation.',
    },
    {
      image: '/images/User_German_Steven.png',
      name: 'Steven',
      label: "Learned German for work",
      text: 'I work in the city and do lots of business in German so I decided to surprise some of my German clients by learning some basic German. Katja was fantastic and it was definitely worth the investment!',
    }
  ],
};

export default teachers;

