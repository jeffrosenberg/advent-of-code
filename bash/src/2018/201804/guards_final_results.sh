#!/bin/bash
input=$(<${1:-/dev/stdin}) # Store stdin in a variable because we need to read it twice

# Get the ID of the guard with the most minutes of sleep
guardId=$(
  echo "$input" | 
  cut -f 1 -d ' ' | # Consider only Guard ID
  sort -k1 | # Sort the list
  uniq -c | # Get a count of each unique ID
  sort -k1 -nr | # Sort in descending order
  head -n 1 | # Take the first (i.e. highest count)
  awk '{$1=$1};1' | # Trim whitespace
  cut -f 2 -d ' ' # Take the second field
)

echo "ID of guard: $guardId"

minutes=$(
  echo "$input" | 
  grep "^$guardId" | # Filter to only a single guard
  cut -f 3 -d ' ' | # Consider only the minutes field
  sort -k1 | # Sort the list
  uniq -c | # Get a count of each unique ID
  sort -k1 -nr | # Sort in descending order
  head -n 1 | # Take the first (i.e. highest count)
  awk '{$1=$1};1' | # Trim whitespace
  cut -f 2 -d ' ' # Take the second field
)

echo "Minute most asleep: $minutes"