stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let repeats = '';
    let counter = 0;
    for (let x = 0, length = str.length; x < length; x += 1) {
      const letter = str.charAt(x);
      if (x === 0) {
        repeats = letter;
        counter = 1;
      } else if (str.charAt(x - 1) === letter && counter < amount) {
        repeats += letter;
        counter += 1;
      } else if (str.charAt(x - 1) !== letter) {
        repeats += letter;
        counter = 1;
      }
    }
    return repeats;
  },

  /**
   * Reverses a string of text
   * Example: reverseString('abc') should be 'cba'
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split('').reverse().join('');
  },
};
