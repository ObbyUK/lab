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
      text: 'I tried meditating with several apps, but its just not the same as learning with someone you can talk to. I found the Obby course and it was the perfect length to get me started. I now feel much more comofortable meditating on my own, and even with the apps. Highly recommended!',
    },
    {
      image: '/images/alex-avatar.png',
      name: 'Alex',
      text: 'I took this meditation course through my work as an initiative to promote personal wellness and it was really great. I never noticed quite how much my mind wanders, I now meditate regularly to calm myself and it has honestly changed my life.',
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
        title: "Grounding & Gratitude",
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
          time: "12PM - 1PM",
          dates: "Every Sunday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Tuesday, 23 Nov",
          location: "42 Acress Street, EC2A 4LW",
          time: "6PM - 7PM",
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
          time: "12PM - 1PM",
          dates: "Every Saturday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Wednesday, 24 Nov",
          location: "Iris & June, W2 4ND",
          time: "6PM - 7PM",
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
          time: "12PM - 1PM",
          dates: "Every Sunday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Tuesday, 23 Nov",
          location: "Kane, N5 6DR",
          time: "6PM - 7PM",
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
          time: "12PM - 1PM",
          dates: "Every Saturday for 4 weeks",
          price: "£100",
          priceLabel: "4 classes",
          link: "",
          buttonText: "Pay £25 today"
        },
        {
          title: "Wednesday, 24 Nov",
          location: "Form Space, S3 7LD",
          time: "6PM - 7PM",
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
      text: "There are lots of studies out there that have shown that mindfulness and meditation can have a hugely positive impact on mental, as well as physical health. The benefits range from reducing stress, improving sleep patterns, increasing focus and improving relationships. Research has shown that meditation works, our job is to help you learn how to do it.",
    },
    {
      title: "What kind of community will I find in this class?",
      text: "Community is incredibly important to us. We believe in getting offline, away from our busy lives and devices, and learning from real people in intimate settings. Being supportive is our #1 objective. All  class sizes are kept small so that you have plenty of teacher interaction and the learning doesn't start and end with the actual class. We have built tools to help you connect with your teacher and other learners via our online platform, with supportive materials and guidance to help you to continue on your learning journey.",
    },
    {
      title: "What if I don’t like it?",
      text: "No hard feelings. Sometimes it's just not for you and we get that, so we make it super easy for you to cancel after your first class and get your full money back immediately (including what you paid for the first class). We want to encourage as many people as possible to take up meditation, so we would rather have you try it out and decide its not for you, than not try at all!",
    },
    {
      title: "What is Obby?",
      text: "Obby is a community learning platform. We combine the best of offline, in-person learning, with online resources and tools. We want to encourage others to get out and learn new things - from meditation to pottery, Spanish to Salsa.",
    },
  ]
};