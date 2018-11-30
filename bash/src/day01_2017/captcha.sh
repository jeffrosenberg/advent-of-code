#!/bin/bash
declare -i result;
result=0
i=0

inputChars="$1"
while [[ $i -lt ${#inputChars} ]]; do 
  j=$((i + 1))
  [[ $j -lt ${#inputChars} ]] || j=0

  currentChar=${inputChars:$i:1}
  nextChar=${inputChars:$j:1}

  if [[ $currentChar -eq $nextChar ]]; then
    result=$((result + $currentChar))
  fi

  i=$((i + 1))
done
  
echo "$result"