const getCaptcha = function(input) {
  var result = 0;
  inputChars = input.split("");
  for(var i = 0; i < inputChars.length; i++) {
    var j = i + 1;
    if (j >= inputChars.length) { j = 0; }
    if(inputChars[i] == inputChars[j]) {
      result += parseInt(inputChars[i]);
    }
  }

  return result;
}

module.exports.getCaptcha = getCaptcha;