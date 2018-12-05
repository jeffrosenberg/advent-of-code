const isDestroyed= (pair) => {
  try {
    if (pair.char != pair.prevChar && pair.char.toUpperCase() == pair.prevChar.toUpperCase()) {
      return true;
    } else if (pair.char != pair.nextChar && pair.char.toUpperCase() == pair.nextChar.toUpperCase()) {
      return true;
    }
  }
  catch (ex) {
    return false;
  }

  return false;
}

const react = (input) => {
  let chars = input.split('');

  let pairs = chars.map((char, index, chars) => {
    return {
      index,
      char,
      prevChar: chars[index-1],
      nextChar: chars[index+1],
    };
  });

  let final_result = pairs.reduce((result, pair, index, pairs) => {
    return result += isDestroyed(pair) ? '' : pair.char;
  }, '');
  
  return final_result;
}

module.exports.react = react;