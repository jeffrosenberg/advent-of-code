#!/bin/bash

declare -i startInt
declare -i endInt
declare -i counter

# Iterate over each line, splitting into variables at whitespace
while read id date start end; do
  # Convert the last two characters of each time into integers
  startStr=${start:3:2}
  endStr=${end:3:2}
  startInt=${startStr#0}
  endInt=$((10#$endStr - 1)) # Per instructions, the ending minute should be left off

  # Use `seq` to write one output line per minute between start and end
  seq -f "$id $date 00:%02g" $startInt $endInt
done < "${1:-/dev/stdin}"