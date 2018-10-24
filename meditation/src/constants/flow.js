import { regionNames } from './regions';

export default {
  reviews: [
    {
      image: '/images/astrid-avatar.jpg',
      name: 'Tanja',
      text: 'I have been incredibly busy with work over the past few months and increasingly felt stressed. I have always wanted to learn to become a bit more mindful and calm. So I did that! Found the beginners mindfulness course on Obby and it was perfect, had a great time with Louise and really learned lots!',
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
    title: "Schedule",
    description: "We have found the perfect length for a beginner meditation course is 4-weeks, with one-hour sessions each week.  Any shorter and you don’t get much out of it, any longer and it gets too much. Here is what you cover each week:",
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
        supTitle: "Once you sign up",
        title: "Free Welcome pack",
        color: "robbins-egg-blue",
        text: "As soon as you join, you will get a welcome pack sent to you by post with everything you need to get started, including a welcome letter from your teacher, instructions and access to your online learning journal, a personal notebook to keep track of your progress, and a copy of The Power of Now by Eckhart Tolle."
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
          dates: "Every Sunday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Tuesday, 23 Nov",
          location: "42 Acress Street, EC2A 4LW",
          time: "6PM - 9PM",
          dates: "Every Tuesday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
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
          dates: "Every Saturday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Wednesday, 24 Nov",
          location: "Iris & June, W2 4ND",
          time: "6PM - 9PM",
          dates: "Every Wednesday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
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
          dates: "Every Sunday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Tuesday, 23 Nov",
          location: "Kane, N5 6DR",
          time: "6PM - 9PM",
          dates: "Every Tuesday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
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
          dates: "Every Saturday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Wednesday, 24 Nov",
          location: "Form Space, S3 7LD",
          time: "6PM - 9PM",
          dates: "Every Wednesday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
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