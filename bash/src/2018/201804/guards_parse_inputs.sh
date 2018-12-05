#!/bin/bash

declare -i id
declare currentAction

# Iterate over each line, splitting into variables at whitespace
while read actionDate actionTime action; do
  # Write outputs
  if [[ "$action" =~ Guard..([0-9]+) ]]; then # New Guard ID found
    id=${BASH_REMATCH[1]} # Set ID but don't write anything
  elif [[ "$action" == "falls asleep" ]]; then
    printf "$id $actionDate $actionTime "
  elif [[ "$action" == "wakes up" ]]; then
    printf "$actionTime\n"
  fi
done < "${1:-/dev/stdin}"