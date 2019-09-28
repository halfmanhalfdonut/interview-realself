/**
 * Justifies the text in a given line
 *
 * @param {string} line - the line of text to justify
 * @param {number} length - the total character length of the line
 *
 * @return {string}
 */
const justify = (line, length) => {
  let result = '';

  if (line) {
    result = line;
    let lineLength = line && line.length || 0;
    let words = line.split(/\s+/);

    // Only manipulate a line that has more than one word and is shorter than the desired length
    if (!isNaN(length) && length > lineLength && words.length > 1) {

      let paddedWordCount = words.length - 1;
      let lengthSansSpaces = words.join('').length;
      let [ firstWord, ...paddedWords ] = words;
      let totalSpaces = length - lengthSansSpaces;
      let spacesPerWord = totalSpaces / paddedWordCount;

      result = paddedWords.reduce((memo, word) => {
        let totalCharacters = Math.ceil(word.length + spacesPerWord);
        return memo += word.padStart(totalCharacters, ' ');
      }, firstWord);
    }
  }

  return result;
};

module.exports = justify;
