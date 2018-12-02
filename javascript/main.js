const fs = require('fs');
const chalk = require('chalk');

const puzzleInputPath = '../puzzle-input';

const _201701 = require('./src/2017/201701/captcha');
const _201802 = require('./src/2018/201802/checksum');

// Read the 2017 Day 01 puzzle input and output the answer
let data = fs.readFileSync(`${puzzleInputPath}/2017/201701/puzzleInput.txt`, 'utf8');
let result = _201701.getCaptcha(data);

process.stdout.write('2017 Day 01:\n');
process.stdout.write(chalk.green.bold(result) + '\n');

result = _201701.getCaptcha(data, (data.length / 2));
process.stdout.write(chalk.blue.bold(result) + '\n');

// Read the 2018 Day 02 puzzle input and output the answer
data = fs.readFileSync(`${puzzleInputPath}/2018/201802/puzzleInput201802.txt`, 'utf8');
result = _201802.getChecksum(data.split('\n'));

process.stdout.write('2018 Day 02:\n');
process.stdout.write(chalk.green.bold(result) + '\n');