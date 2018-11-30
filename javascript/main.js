const fs = require('fs');
const chalk = require('chalk');

const day012017 = require('./src/day01_2017/captcha');

// Read the Day 01 2017 puzzle input and output the answer
fs.readFile('./src/day01_2017/puzzleInput.txt', 'utf8', function(err, data) {
  if (err) {
    process.stderr.write(err);
  }
  else if (data) {
    result = day012017.getCaptcha(data);

    process.stdout.write('Day 01 2017:\n');
    process.stdout.write(chalk.green.bold(result) + '\n');
  };
});