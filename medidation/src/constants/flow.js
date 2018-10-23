import { regionNames } from './regions';

export default {
  reviews: [
    {
      image: '/images/astrid-avatar.jpg',
      name: 'Astrid',
      text: 'The company I work for just opened an office in Italy, and it felt natural to learn a bit of italian to better communicate with my italian colleagues. Doing this on Obby felt natural, and Vicenzo is definitely one of the nicest and most patient teachers ever. I would recommend this to anyone!',
    },
    {
      image: '/images/florien-avatar.png',
      name: 'Florien',
      text: 'I took Spanish for GCSE and A-Levels but lost pretty much everything I learned. After a trip to Madrid last summer I realised I couldn’t even order a Sangria so I made it my mission to learn Spanish again. Really happy with Obby’s classes. Great teachers and prices!',
    },
    {
      image: '/images/alex-avatar.png',
      name: 'Alex',
      text: 'I never thought I would end up becoming near fluent in German but somehow I did. My best mate is from Munich and he bet me that I wouldn’t be able to learn German in 6 months - I found a bunch of Obby classes and knocked it out the park! Dankeschoen Obby!',
    }
  ],
  schedule: {
    price: {
      calculation: "4 classes",
      total: "£100"
    },
    buttonText: "Book a course",
    blurb: "Money back guaranteed if you don't enjoy your first class",
    note: {
      title: "After 4 weeks",
      text: "After the four weeks, you will be familiar with how it feels to sit in stillness and silence and understand the important impacts of the practice. The beauty of modern mindfulness is that it combines the traditional practices with a modern lifestyle and beliefs."
    },
    weeks: [
      {
        title: "Welcoming pack",
        color: "robbins-egg-blue",
        text: "Receive our welcoming pack by post, and get access to our online learning journal where you can get to know your teachers and engage with other fellow students."
      },
      {
        title: "Grounding & Grattitude",
        color: "sun",
        text: "An introduction to Mindfulness and Meditation and its history, it's relevance in today's society and the benefits and techniques it holds. You will go over strategies for managing stress and a lack of energy."
      },
      {
        title: "Balancing Act",
        color: "emerald",
        text: "This week you will learn the art of movement and how your body can aid meditation and mindfulness. You will focus on stress management and relaxation poses whilst learning the art of balance. Balance is something we have to mast within our bodies before we can perfect it in our mind and this week we focus on how it is important to balance the major factors in your life. Work life, family life, social life and your personal/emotion life."
      },
      {
        title: "Energise",
        color: "camelot",
        text: "After mastering gratitude and balance, this week you'll learn how to build from our strong foundations and cultivate energy from meditation and mindfulness."
      },
      {
        title: "Happiness",
        color: "deep-blush",
        text: "Finally, you have reached integration week. After mastering each technique singularly, this week you will learn how to use them in conjunction with your everyday routines. This is the week to go over anything you feel you are lacking from the other techniques and prepare to use mindfulness and meditation to help cultivate happiness your daily lives."
      },
    ]
  },
  classesByLocation: [
    {
      name: regionNames.EAST_LONDON,
      classes: [
        {
          title: "Sunday, 21 Nov",
          location: "42 Acress Street, EC2A 4LW",
          time: "12PM - 3PM",
          dates: "Every Sundary starting from 21 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
        {
          title: "Tuesday, 23 Nov",
          location: "42 Acress Street, EC2A 4LW",
          time: "6PM - 9PM",
          dates: "Every Tuesday starting from 23 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        }
      ]
    },
    {
      name: regionNames.WEST_LONDON,
      classes: [
        {
          title: "Saturday, 20 Nov",
          location: "Iris & June, W2 4ND",
          time: "12PM - 3PM",
          dates: "Every Saturday starting from 20 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
        {
          title: "Wednesday, 24 Nov",
          location: "Iris & June, W2 4ND",
          time: "6PM - 9PM",
          dates: "Every Wednesday starting from 24 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
      ]
    },
    {
      name: regionNames.NORTH_LONDON,
      classes: [
        {
          title: "Sunday, 21 Nov",
          location: "Kane, N5 6DR",
          time: "12PM - 3PM",
          dates: "Every Sunday starting from 21 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
        {
          title: "Tuesday, 23 Nov",
          location: "Kane, N5 6DR",
          time: "6PM - 9PM",
          dates: "Every Tuesday starting from 23 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
      ]
    },
    {
      name: regionNames.SOUTH_LONDON,
      classes: [
        {
          title: "Saturday, 20 Nov",
          location: "Form Space, S3 7LD",
          time: "12PM - 3PM",
          dates: "Every Saturday starting from 20 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
        {
          title: "Wednesday, 24 Nov",
          location: "Form Space, S3 7LD",
          time: "6PM - 9PM",
          dates: "Every Wednesday starting from 24 Nov",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
        },
      ]
    }
  ],
  faq: [
    {
      title: "What are the benefits of meditation?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What kind of community will I find in this class?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What if I don’t like it?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What is Obby?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]
};