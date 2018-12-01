#!/bin/bash
# shopt -s globstar # Turn on directory globbing - requires Bash v4.0

# Get the current path for this script
sourceDir="$( dirname "${BASH_SOURCE[0]}" )"
pushd $sourceDir > /dev/null
currentDir="$( pwd )"
popd > /dev/null

BASH_SRC_DIR="$currentDir/src"
BASH_TEST_DIR="$currentDir/test"
BATS="$BASH_TEST_DIR/lib/bats/bin/bats"

"$BATS" "$BASH_TEST_DIR/2017/201701/captcha.bats"
