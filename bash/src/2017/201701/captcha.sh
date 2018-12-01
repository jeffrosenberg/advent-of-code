#!/bin/bash
declare -i result;
declare -i step;
result=0
i=0

inputChars="$1"
step=${2:-"1"} # Use parameter $2 when passed, otherwise default to 1
inputCharsLen=${#inputChars}

while [[ $i -lt $inputCharsLen ]]; do 
  j=$(( (i + $step) % $inputCharsLen ));

  currentChar=${inputChars:$i:1}
  nextChar=${inputChars:$j:1}

  if [[ $currentChar -eq $nextChar ]]; then
    result=$((result + $currentChar))
  fi

  i=$((i + 1))
done
  
echo "$result"