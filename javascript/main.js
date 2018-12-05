const fs = require('fs');
const chalk = require('chalk');

const puzzleInputPath = '../puzzle-input';

const _201701 = require('./src/2017/201701/captcha');
const _201802_checksum = require('./src/2018/201802/checksum');
const _201802_search = require('./src/2018/201802/search');
const _201805_polymer = require('./src/2018/201805/polymer');

// Read the 2017 Day 01 puzzle input and output the answer
let data = fs.readFileSync(`${puzzleInputPath}/2017/201701/puzzleInput.txt`, 'utf8');
let result = _201701.getCaptcha(data);

process.stdout.write('2017 Day 01:\n');
process.stdout.write(chalk.green.bold(result) + '\n');

result = _201701.getCaptcha(data, (data.length / 2));
process.stdout.write(chalk.blue.bold(result) + '\n');

// Read the 2018 Day 02 puzzle input and output the answer
data = fs.readFileSync(`${puzzleInputPath}/2018/201802/puzzleInput201802.txt`, 'utf8');
inputs = data.split('\n');

process.stdout.write('2018 Day 02:\n');
result = _201802_checksum.getChecksum(inputs);
process.stdout.write(chalk.green.bold(result) + '\n');

result = _201802_search.search(inputs);
process.stdout.write(chalk.blue.bold(result) + '\n');

// Read the 2018 Day 05 puzzle input and output the answer
data = fs.readFileSync(`${puzzleInputPath}/2018/201805/puzzleInput201805.txt`, 'utf8');

process.stdout.write('2018 Day 05:\n');
result = _201805_polymer.react(data);
process.stdout.write(chalk.green.bold(result.length) + '\n');