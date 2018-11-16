const levelValues = {
  BEGGINER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
};


const levelNames = {};
levelNames[levelValues.BEGGINER] = 'Beginner';
levelNames[levelValues.INTERMEDIATE] = 'Intermediate';
levelNames[levelValues.ADVANCED] = 'Advanced';


const levelDescriptions = {};
levelDescriptions[levelValues.BEGGINER] = {
  sessionsPreview: [
    {
      title: "Pronunciation rules & Grammar",
      text: "You’ll learn how the Italian alphabet is different than the English one, and how to apply those rules.",
    },
    {
      title: "Greetings & Farewells",
      text: "You’ll learn how to meet & greet people and how to introduce yourself.",
    },
    {
      title: "Basic conversation",
      text: "When you’re done, you’ll be able to have a basic conversation in Italian.",
    },
  ],
  contentList: [
    "Greetings and farewells",
    "Introduce yourself and other people",
    "Ordering at the bar or at a restaurant",
    "Talking about habits and hobbies",
    "Describing your room/house",
    "Understanding and giving directions",
    "Describe and introduce your family",
    "Review and consolidation",
  ],
};

levelDescriptions[levelValues.INTERMEDIATE] = {
  sessionsPreview: [
    {
      title: 'Improving conversations',
      text: 'Get comfortable with spontaneous conversations, such as what you do in your free time or your summer plans.',
    },
    {
      title: 'Getting around when travelling',
      text: 'Learn to navigate your way around a new place, ask for sightseeing places and discuss restaurant tips with locals.',
    },
    {
      title: 'Basic writing',
      text: 'Understand and write descriptions of events, feelings and wishes in emails, notes and messages.',
    },
  ],
  contentList: [],
};

levelDescriptions[levelValues.ADVANCED] = {
  sessionsPreview: [
    {
      title: 'Almost fluent',
      text: 'Express yourself fluently and spontaneously on a wide range of topics of increasingly complex nature.',
    },
    {
      title: 'Express yourself clearly',
      text: 'Present clear, in-depth descriptions of subjects, developing particular points and concluding appropriately.',
    },
    {
      title: 'Advanced writing',
      text: 'Learn to express yourself clearly in well-written text, such as a work report or a essay.',
    },
  ],
  contentList: [],
};

export { levelNames, levelDescriptions };
export default levelValues;