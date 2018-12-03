const languages = {
  SPANISH: 'spanish',
  ITALIAN: 'italian',
  FRENCH: 'french',
  GERMAN: 'german',
};

const languageNames = {};
languageNames[languages.SPANISH] = 'Spanish';
languageNames[languages.ITALIAN] = 'Italian';
languageNames[languages.FRENCH] = 'French';
languageNames[languages.GERMAN] = 'German';

const languagesValueAndName = [
  { value: languages.SPANISH, name: 'Spanish' },
  { value: languages.ITALIAN, name: 'Italian' },
  { value: languages.FRENCH, name: 'French' },
  { value: languages.GERMAN, name: 'German' },
];

const languageToFlagSvg = {
  spanish: "/icons/spain-flag.svg",
  italian: "/icons/italy-flag.svg",
  french: "/icons/france-flag.svg",
  german: "/icons/germany-flag.svg",
};

export { languageNames, languagesValueAndName, languageToFlagSvg};
export default languages;