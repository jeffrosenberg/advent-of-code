#!/bin/bash
# shopt -s globstar # Turn on directory globbing - requires Bash v4.0

# Get the current path for this script
sourceDir="$( dirname "${BASH_SOURCE[0]}" )"
pushd $sourceDir > /dev/null
currentDir="$( pwd )"
popd > /dev/null

BASH_SRC_DIR="$currentDir/src"
BASH_TEST_DIR="$currentDir/test"
INPUT="$currentDir/../puzzle-input"

echo "Day 01 2017:"
"$BASH_SRC_DIR/day01_2017/captcha.sh" $(cat < $INPUT/day01_2017/puzzleInput.txt)
