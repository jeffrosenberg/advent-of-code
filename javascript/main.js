const fs = require('fs');
const chalk = require('chalk');

const puzzleInputPath = '../puzzle-input';

const day012017 = require('./src/2017/201701/captcha');

// Read the Day 01 2017 puzzle input and output the answer
fs.readFile(`${puzzleInputPath}/2017/201701/puzzleInput.txt`, 'utf8', function(err, data) {
  if (err) {
    process.stderr.write(err);
  }
  else if (data) {
    result = day012017.getCaptcha(data);

    process.stdout.write('2017 Day 01:\n');
    process.stdout.write(chalk.green.bold(result) + '\n');
    
    result = day012017.getCaptcha(data, (data.length / 2));
    process.stdout.write(chalk.blue.bold(result) + '\n');
  };
});