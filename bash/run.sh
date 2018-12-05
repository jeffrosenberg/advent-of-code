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

echo "2017 Day 01:"
input="$(cat < $INPUT/2017/201701/puzzleInput.txt)"
"$BASH_SRC_DIR/2017/201701/captcha.sh" "$input"
"$BASH_SRC_DIR/2017/201701/captcha.sh" "$input" ${#input}/2

echo
echo "2018 Day 04:"
"$BASH_SRC_DIR/2018/201804/guards_format_inputs.sh" "$INPUT/2018/201804/puzzleInput201804.txt" | 
  "$BASH_SRC_DIR/2018/201804/guards_parse_inputs.sh" |
  "$BASH_SRC_DIR/2018/201804/guards_count_sleep.sh" |
  "$BASH_SRC_DIR/2018/201804/guards_final_results.sh"