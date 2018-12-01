const getCaptcha = function(input, step=1) {
  var result = 0;
  inputChars = input.split("");
  
  for(var i = 0; i < inputChars.length; i++) {
    var j = ((i + step) % inputChars.length);
    if(inputChars[i] == inputChars[j]) {
      result += parseInt(inputChars[i]);
    }
  }

  return result;
}

module.exports.getCaptcha = getCaptcha;