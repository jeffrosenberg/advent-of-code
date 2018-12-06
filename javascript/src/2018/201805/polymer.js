// Original function, use map() and reduce()
// Deprecated and replaced with the function below
const react_mapreduce = (input) => {
  let len = input.length;
  let chars = input.split('');

  let final_result = 
    chars.map((char, index, chars) => {
      return {
        char,
        isDestroyed: 
          (
          // Test match to previous character
          index > 0 && 
            char != chars[index-1] && 
            char.toUpperCase() == chars[index-1].toUpperCase() &&
            !(index > 1 && // Skip the last character of triplets like 'aAa'
                char === chars[index-2] && 
                (index == chars.length-1 ||
                 (!(char != chars[index+1] && char.toUpperCase() == chars[index+1].toUpperCase()))))
          || 
          // Test match to next character
          index < (chars.length-1) && 
            char != chars[index+1] && 
            char.toUpperCase() == chars[index+1].toUpperCase()
          ),
      };
    }).reduce((result, char) => {
      return result += char.isDestroyed ? '' : char.char;
    }, '');

  // If characters have been removed since the 
  // last run, do another iteration
  if (final_result.length < len) {
    return react(final_result);
  } else {
    return final_result;
  }
}

// New function using a for loop
// This purposely operates on only one match per iteration
const reaction = (input) => {
  let chars = input.split('');

  // Loop through the array until finding a single match
  for (i = 0; i < chars.length; i++) {
    if (i < (chars.length-1) && chars[i] != chars[i+1] && chars[i].toUpperCase() === chars[i+1].toUpperCase()) {
      return (input.substring(0,i) + input.substring(i+2));
    }
  }
  
  // If no match found, return the original input
  return input;
}

// Use a wrapping function to call the function
// successively but not recursively.
// Recursive calls were leading to stack overflows
const react = (polymer) => {
  let len = 0;
  do {
    len = polymer.length;
    polymer = reaction(polymer);
  } while (polymer.length < len);

  return polymer;
}

module.exports.react = react;