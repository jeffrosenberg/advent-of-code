const search = function(inputs) {
  // 1. Sort the array so we don't have to iterate over every item every time
  inputs.sort();

  // 2. Iterate over the array and compare each item with the next on the list
  let mismatchedIndexes = []; // Track array indexes that don't match
  for(i in inputs) {
    mismatchedIndexes = [];
    const len = inputs[i].length;
    const currentInput = inputs[i].split(''); // Convert to array of characters
    const nextInput = inputs[parseInt(i)+1].split('');
    
    // 3. Split each item into an array of characters and compare one by one
    for(let j=0; j < len; j++) {
      if (currentInput[j] != nextInput[j]) {
        mismatchedIndexes.push(j);

        // 4. As soon as more than one mismatch is found, break out of the loop and move on
        if (mismatchedIndexes.length > 1) {
          break;
        }
      }
    }

    // 5. As soon as an item is found with only one mismatch, stop comparing
    if (mismatchedIndexes.length == 1) {
      break;
    }
  }

  // 6. Take the resulting item and pass it back, omitting the one mismatched character
  let mismatch = parseInt(mismatchedIndexes[0]);
  return inputs[i].slice(0,mismatch) + inputs[i].slice(mismatch+1,);
}

module.exports.search = search;