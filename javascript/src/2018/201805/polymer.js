const isDestroyed= (pair) => {
  return 1===1 &&
  // Skip the last character of triplets like 'aAa'
  pair.skip === false &&
  // Test match to previous character
  pair.prevChar != undefined && 
    pair.char != pair.prevChar && 
    pair.char.toUpperCase() == pair.prevChar.toUpperCase()
  || 
  // Test match to next character
  pair.nextChar != undefined && 
    pair.char != pair.nextChar && 
    pair.char.toUpperCase() == pair.nextChar.toUpperCase()
}

const react = (input) => {
  let len = input.length;
  let chars = input.split('');

  let final_result = 
    chars.map((char, index, chars) => {
      return {
        index,
        char,
        prevChar: chars[index-1],
        nextChar: chars[index+1],
        skip: (char === chars[index-2] // Skip the last character of triplets like 'aAa'
               && char.toUpperCase() == chars[index-1].toUpperCase())
      };
    }).reduce((result, pair) => {
      return result += isDestroyed(pair) ? '' : pair.char;
    }, '');

  // If characters have been removed since the 
  // last run, do another iteration
  if (final_result.length < len) {
    return react(final_result);
  } else {
    return final_result;
  }
}

module.exports.react = react;