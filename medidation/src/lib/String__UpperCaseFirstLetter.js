export default (word) => {
  if (typeof word === 'string' && word.length > 1) {
    return word[0].toUpperCase() + word.slice(1)
  }
  return '';
}
