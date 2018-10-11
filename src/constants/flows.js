import languages from './languages';

var flows = {};

flows[languages.SPANISH] = {
  levelOptions: [
    {
      title: "Beginner",
      value: "begginer",
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
      title: "Intermediate",
      value: "intermediate",
      description: "You can have a decent conversation in Spanish",
      sessionsPreview: []
    },
    {
      title: "Advanced",
      value: "advanced",
      description: "You’re almost there, but want to get perfect.",
      sessionsPreview: []
    }
  ],
};

export default flows;