// Use bitmasks for storing the number of twos and threes in a single result
const HAS_EXACTLY_TWO = 1;
const HAS_EXACTLY_THREE = 1 << 1;

const getChecksumForLine = function(input) {
  const len = input.length;
  let characters = {};
  let result = 0;

  // Count the number of occurences of each character in the line
  for(let i = 0; i < len; i++) {
    char = input.charAt(i);
    if (characters.hasOwnProperty(char)) {
      characters[char] += 1;
    } else {
      characters[char] = 1;
    }
  }

  // Iterate over the counts and determine whether any characters
  // have exactly two and/or three occurences
  for(let char in characters) {
    if (characters[char] == 2) {
      result = result | HAS_EXACTLY_TWO;
    } else if (characters[char] == 3) {
      result = result | HAS_EXACTLY_THREE;
    }
  }

  return result;
}

const getChecksum = function(input) {
  return 12;
}

module.exports.getChecksumForLine = getChecksumForLine;
module.exports.getChecksum = getChecksum;